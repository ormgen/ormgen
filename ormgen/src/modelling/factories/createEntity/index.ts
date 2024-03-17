import { Factorized, getFactorized } from '~/helpers';
import { store } from '~/internals';
import { Mixins, mx } from '~/modelling/mixins';
import { Entity } from '~/modelling/types';

interface Params {
	mx: Mixins;
}

export function createEntity(input: Factorized<Entity, Params>) {
	const entity = getFactorized(input, { mx });

	store.entities.set(entity.name, entity);

	return entity;
}
