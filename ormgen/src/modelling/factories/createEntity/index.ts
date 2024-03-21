import { Callable, flattenCallable } from '~/helpers/utils';
import { store } from '~/internals';
import { Mixins, mx } from '~/modelling/mixins';
import { Entity__Input } from '~/modelling/types';

interface Params {
	mx: Mixins;
}

export function createEntity(input: Callable<Entity__Input, Params>) {
	const entity = flattenCallable(input, { mx });

	store.entityInputs.set(entity.name, entity);

	return entity;
}
