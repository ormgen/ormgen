import { store } from '~/internals';
import { Entity, Entity$ } from '~/modelling';
import { createEntityFields$ } from '../createEntityFields$';

export async function createEntity$(source: Entity, entities: Entity[]): Promise<Entity$> {
	const entity$: Entity$ = {
		source,

		computed: {
			fields: createEntityFields$(source, entities),
		},
	};

	store.entities$.set(entity$.source.name, entity$);

	return entity$;
}
