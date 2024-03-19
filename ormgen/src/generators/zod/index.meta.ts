import { Entity } from '~/modelling';

export function createMetaName(entity: Entity) {
	return entity.name + 'Meta';
}
