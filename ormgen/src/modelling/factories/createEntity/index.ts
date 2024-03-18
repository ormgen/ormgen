import { Callable, flattenCallable } from '~/helpers';
import { store } from '~/internals';
import { Mixins, mx } from '~/modelling/mixins';
import { Entity } from '~/modelling/types';

interface Params {
	mx: Mixins;
}

export function createEntity(input: Callable<Entity, Params>) {
	const entity = flattenCallable(input, { mx });

	store.entities.set(entity.name, entity);

	return entity;
}
