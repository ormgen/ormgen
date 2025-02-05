import { configStore, store } from '~/internals';

import { OrmGenerator } from '~/generators';
import { findTargetedEntities } from '~/helpers';
import { Seed } from '~/modelling';
import { InstanceConfig } from '../index.config';

type SeedStore = Record<string, boolean>;

async function runSeed(gen: OrmGenerator, seed: Seed, seedStore: SeedStore) {
	const { entity } = seed;

	const { excludedTables = [] } = configStore.instance?.seed || {};

	const entityName = entity.name;
	const relatedEntities = findTargetedEntities(entity);

	for (const relatedEntity of relatedEntities) {
		await runSeed(gen, store.getSeed(relatedEntity.name), seedStore);
	}

	if (excludedTables.includes(entityName)) {
		return;
	}

	if (seedStore[entityName]) {
		return;
	}

	await gen.seed?.onEntity?.(seed);

	seedStore[entityName] = true;
}

export async function seed(config: InstanceConfig) {
	for (const gen of config.generators) {
		const seedStore: SeedStore = {};

		await gen.seed?.onStart?.();

		for (const seed of store.getSeeds()) {
			await runSeed(gen, seed, seedStore);
		}
	}
}
