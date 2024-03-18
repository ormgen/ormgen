import { Entity, Entity$ } from '~/modelling';

export function getEntityId(entity: Entity | Entity$) {
	if ('source' in entity) {
		return entity.source.id;
	}

	return entity.id;
}
