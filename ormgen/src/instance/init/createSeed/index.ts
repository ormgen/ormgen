import { Seed, Seed__Input } from '~/modelling';
import { InitConfig } from '../index.config';
import { store } from '~/internals';

export async function createSeed<T extends string>(config: InitConfig, input: Seed__Input<T>) {
	const entity = store.getEntity(input.name);

	const dependsOnEntities = [] as string[];

	const seed: Seed<T> = { ...input, dependsOnEntities, entity };

	store.seeds.set(input.name, seed);
}
