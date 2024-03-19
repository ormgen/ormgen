import { store } from '~/internals';
import { Entity__Input, Entity } from '~/modelling';
import { createEntityFields } from '../createEntityFields';

export async function createEntity(input: Entity__Input): Promise<Entity> {
	const entity: Entity = {
		...input,

		$input: input,

		fields: createEntityFields(input),
	};

	store.entities.set(entity.name, entity);

	return entity;
}
