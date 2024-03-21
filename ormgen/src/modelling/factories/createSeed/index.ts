import { EntityName } from '~/generated';
import { store } from '~/internals';
import { Seed__Input } from '~/modelling';

export function createSeed<T extends EntityName>(input: Seed__Input<T>) {
	store.seedInputs.set(input.name, input);

	return input;
}
