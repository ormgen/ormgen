import { store } from '~/internals';

import { createEntity } from './createEntity';
import { findPaths } from '../../helpers/utils/findPaths';
import { initEntityInput } from './initEntityInput';
import { InitConfig } from './index.config';
import { createSeed } from './createSeed';
import { initEntitySeed } from './initEntitySeed';
import { createMixins } from './createMixin';
import { tryImport } from '~/helpers';
import path from 'path';

export async function init(config: InitConfig) {
	const { cwd, search } = config;
	const { root, entityPatterns, entityEnumPatterns, entitySeedPatterns, globalEnumsPath, globalMixinsPath } = search;

	const entityFolderPaths = findPaths({
		prefixes: [cwd, root],
		patterns: entityPatterns,
		options: { onlyDirectories: true },
	});

	if (globalEnumsPath) {
		const $globalEnumsPath = path.resolve(root, globalEnumsPath);

		await tryImport($globalEnumsPath);
	}

	if (globalMixinsPath) {
		const $globalMixinsPath = path.resolve(root, globalMixinsPath);

		await createMixins($globalMixinsPath);
	}

	for (const entityFolderPath of entityFolderPaths) {
		await initEntityInput(entityFolderPath);

		const entityEnumPaths = findPaths({
			prefixes: [entityFolderPath],
			patterns: entityEnumPatterns,
			options: { onlyFiles: true },
		});

		const entitySeedPaths = findPaths({
			prefixes: [entityFolderPath],
			patterns: entitySeedPatterns,
			options: { onlyFiles: true },
		});

		for (const entityEnumPath of entityEnumPaths) {
			await tryImport(entityEnumPath);
		}

		for (const entitySeedPath of entitySeedPaths) {
			await initEntitySeed(entityFolderPath, entitySeedPath);
		}
	}

	for (const entityInput of store.getEntityInputs()) {
		await createEntity(entityInput, entityFolderPaths);
	}

	for (const seedInput of store.getSeedInputs()) {
		await createSeed(config, seedInput);
	}
}

export type { InitConfig };
