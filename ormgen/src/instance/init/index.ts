import { store } from '~/internals';

import { createEntity } from './createEntity';
import { findPaths } from '../../helpers/findPaths';
import { initEntityInput } from './initEntityInput';
import { InitConfig } from './index.config';

export async function init(config: InitConfig) {
	const { cwd, search } = config;
	const { root, entities, entityEnum, globalEnums } = search;

	const entityFolderPaths = findPaths({
		prefixes: [cwd, root],
		patterns: entities,
		options: { onlyDirectories: true },
	});

	const globalEnumPaths = findPaths({
		prefixes: [cwd, root],
		patterns: globalEnums,
		options: { onlyFiles: true },
	});
	// const globalMixinPaths = findPaths(config, globalMixins);

	for (const entityFolderPath of entityFolderPaths) {
		await initEntityInput(entityFolderPath);

		const entityEnumPaths = findPaths({
			prefixes: [entityFolderPath],
			patterns: entityEnum,
			options: { onlyFiles: true },
		});

		for (const entityEnumPath of entityEnumPaths) {
			await import(entityEnumPath);
		}
	}

	for (const enumPath of globalEnumPaths) {
		await import(enumPath);
	}

	const entityInputs = store.getEntityInputs();

	for (const entityInput of entityInputs) {
		await createEntity(config, entityInput, entityFolderPaths);
	}
}
