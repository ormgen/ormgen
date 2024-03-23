import { Callable, flattenCallable } from '~/helpers/utils';
import { store } from '~/internals';
import { defaultMixins } from '~/modelling/defaultMixins';
import { Entity__Input } from '~/modelling/types';
import { Mixins } from '~/generated';

interface Params {
	mx: Mixins;
}

function createMixins() {
	const externalMixins = store.mixins?.content || {};

	return { ...defaultMixins, ...externalMixins } as Mixins;
}

export function createEntity(input: Callable<Entity__Input, Params>) {
	const mx = createMixins();

	const entity = flattenCallable(input, { mx });

	store.entityInputs.set(entity.name, entity);

	return entity;
}
