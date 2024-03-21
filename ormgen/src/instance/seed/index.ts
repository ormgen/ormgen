import { store } from '~/internals';

import { InstanceConfig } from '../index.config';

export async function seed(config: InstanceConfig) {
	for (const gen of config.generators) {
		for (const seed of store.getSeeds()) {
			gen.seed?.onEntity?.(seed);
		}
	}
}
