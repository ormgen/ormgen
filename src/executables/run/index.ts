import { store } from '~/internals';
import { RunConfig } from './index.config';
import { init } from './init';

export async function run(config: RunConfig) {
	await init(config);

	for (const gen of config.generators) {
		for (const e of store.getEnums()) {
			await gen.onEnum(e);
		}

		for (const entity of store.getEntities()) {
			await gen.onEntity(entity);
		}
	}
}
