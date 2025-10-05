import { store } from '~/internals';
import { findPaths } from '~/helpers/utils';
import { InstanceConfig } from '../index.config';

export async function sync(config: InstanceConfig) {
	const { entityMeta = ['meta.ts', 'meta/index.ts', 'index.meta.ts', 'index.meta/index.ts'] } = config.search;

	for (const gen of config.generators) {
		const enums = store.getEnums();
		const entities = store.getEntities();

		await gen.sync?.onStart?.();
		await gen.sync?.onEnums?.({ enums });
		await gen.sync?.onEntities?.({ entities });

		for (const e of enums) {
			await gen.sync?.onEnum?.({ enumShape: e, enums });
		}

		for (const entity of entities) {
			const absoluteEntityMetaFilePaths = findPaths({
				prefixes: [entity.absolutePath],
				patterns: entityMeta,
				options: { onlyFiles: true },
			});

			const absoluteEntityMetaFilePath = absoluteEntityMetaFilePaths.find((absoluteEntityMetaFilePath) => {
				return entities.some((entity) => {
					return absoluteEntityMetaFilePath.includes(`/${entity.name}/`);
				});
			});

			for (const absoluteEntityMetaFilePath of absoluteEntityMetaFilePaths) {
				await gen.sync?.onMetaFile?.({ absoluteEntityMetaFilePath, entity });
			}

			await gen.sync?.onEntity?.({ entity, entities, absoluteEntityMetaFilePath });
		}

		await gen.sync?.onWrite?.();
		await gen.sync?.onComplete?.();
	}
}
