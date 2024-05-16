import { store } from '~/internals';
import { Entity, EntityField } from '~/modelling';

// Find all entities that is targeted by the given entity
export function findTargetedEntities(sourceEntity: Entity) {
	const { fields } = sourceEntity;

	const fieldItems = Object.values(fields);

	const relationFieldItems = fieldItems.filter((field) => {
		return field.type === 'relation' && field.targetEntityFieldName !== sourceEntity.name;
	}) as EntityField.Relation[];

	return relationFieldItems.map((field) => {
		return store.getEntity(field.targetEntityName);
	});
}
