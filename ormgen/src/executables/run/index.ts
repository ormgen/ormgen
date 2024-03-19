import { store } from '~/internals';
import { RunConfig } from './index.config';
import { init } from './init';

export async function run(config: RunConfig) {
	await init(config);

	for (const gen of config.generators) {
		const enums = store.getEnums();
		const entities = store.getEntities();

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
