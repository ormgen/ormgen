import { store } from '~/internals';

import { OrmgenConfig } from '../index.config';

export async function seed(config: OrmgenConfig) {
	for (const gen of config.generators) {
		for (const seed of store.getSeeds()) {
			gen.seed?.onEntity?.(seed);
		}
	}
}
