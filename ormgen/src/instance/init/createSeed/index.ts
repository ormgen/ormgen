import { Seed, Seed__Input } from '~/modelling';
import { InitConfig } from '../index.config';
import { store } from '~/internals';

export async function createSeed(config: InitConfig, input: Seed__Input) {
	const entity = store.getEntity(input.name);

	const dependsOnEntities = [] as string[];

	const seed: Seed = { ...input, dependsOnEntities, entity };

	store.seeds.set(input.name, seed);
}
