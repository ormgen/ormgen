import { store } from '~/internals';
import { findPaths } from '~/helpers';
import { InstanceConfig } from '../index.config';

export async function sync(config: InstanceConfig) {
	const { entityMeta = ['meta.ts', 'meta/index.ts', 'index.meta.ts', 'index.meta/index.ts'] } = config.search;

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
