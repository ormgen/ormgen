import { Entity$, EntityFieldType } from '~/modelling';

export function createRelationTargetFieldName(field: EntityFieldType.Relation, targetEntity$: Entity$): string {
	const targetEntityId = targetEntity$.source.id;

	if (!targetEntityId) {
		throw new Error(`Target entity (${field.targetEntityName}) requires a primary field`);
	}

	return field.targetEntityFieldName || targetEntityId;
}
