import { store } from '~/internals';
import { Seed__Input } from '~/modelling';

export function createSeed<T extends string>(input: Seed__Input<T>) {
	store.seedInputs.set(input.name, input);

	return input;
}
