import { store } from '~/internals';

import { OrmgenConfig } from '../index.config';
import { findTargettedEntities } from '~/helpers';
import { Seed } from '~/modelling';
import { OrmGenerator } from '~/generators';

type SeedStore = Record<string, boolean>;

async function runSeed(gen: OrmGenerator, seed: Seed, seedStore: SeedStore) {
	const { entity } = seed;

	const entityName = entity.name;
	const relatedEntities = findTargettedEntities(entity);

	for (const relatedEntity of relatedEntities) {
		await runSeed(gen, store.getSeed(relatedEntity.name), seedStore);
	}

	if (seedStore[entityName]) {
		return;
	}

	await gen.seed?.onEntity?.(seed);

	seedStore[entityName] = true;
}

export async function seed(config: OrmgenConfig) {
	for (const gen of config.generators) {
		const seedStore: SeedStore = {};

		for (const seed of store.getSeeds()) {
			await runSeed(gen, seed, seedStore);
		}
	}
}
