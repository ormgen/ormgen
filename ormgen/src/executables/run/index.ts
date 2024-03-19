import { store } from '~/internals';
import { RunConfig } from './index.config';
import { init } from './init';
import { findPaths } from '~/helpers';

export async function run(config: RunConfig) {
	const { entityMeta = ['meta.ts', 'meta/index.ts', 'index.meta.ts', 'index.meta/index.ts'] } = config.search;

	await init(config);

	for (const gen of config.generators) {
		const enums = store.getEnums();
		const entities = store.getEntities();

		for (const entity of entities) {
			const entityMetaPaths = findPaths({
				prefixes: [entity.absolutePath],
				patterns: entityMeta,
				options: { onlyFiles: true },
			});

			for (const entityMetaPath of entityMetaPaths) {
				await gen.onMetaFile(entityMetaPath, entity);
			}
		}

		for (const e of enums) {
			await gen.onEnum(e);
		}

		for (const entity of entities) {
			await gen.onEntity(entity, entities);
		}

		await gen.onWrite();
		await gen.onComplete();
	}
}
