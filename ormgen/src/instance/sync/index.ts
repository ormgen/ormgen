import { store } from '~/internals';
import { findPaths } from '~/helpers/utils';
import { InstanceConfig } from '../index.config';

export async function sync(config: InstanceConfig) {
	const { entityMeta = ['meta.ts', 'meta/index.ts', 'index.meta.ts', 'index.meta/index.ts'] } = config.search;

	for (const gen of config.generators) {
		const enums = store.getEnums();
		const entities = store.getEntities();

		await gen.sync?.onStart?.();
		await gen.sync?.onEnums?.(enums);
		await gen.sync?.onEntities?.(entities);

		for (const entity of entities) {
			const entityMetaPaths = findPaths({
				prefixes: [entity.absolutePath],
				patterns: entityMeta,
				options: { onlyFiles: true },
			});

			for (const entityMetaPath of entityMetaPaths) {
				await gen.sync?.onMetaFile?.(entityMetaPath, entity);
			}
		}

		for (const e of enums) {
			await gen.sync?.onEnum?.(e, enums);
		}

		for (const entity of entities) {
			await gen.sync?.onEntity?.(entity, entities);
		}

		await gen.sync?.onWrite?.();
		await gen.sync?.onComplete?.();
	}
}
