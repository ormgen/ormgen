import { Entity, Entity$ } from '~/modelling';

export function getEntityName(entity: Entity | Entity$) {
	if ('source' in entity) {
		return entity.source.name;
	}

	return entity.name;
}
