import { Entity$, EntityFieldType } from '~/modelling/';
import { createRelationEntityFieldName, createRelationTargetFieldName, getEntitySafe } from '~/utils';

export function createRelationAttr(field: EntityFieldType.Relation, entities: Entity$[]) {
	const { onDelete } = field;

	const targetEntity$ = getEntitySafe(field.targetEntityName, entities);

	const targetFieldName = createRelationTargetFieldName(field, targetEntity$);
	const entityFieldName = createRelationEntityFieldName(field, targetEntity$);

	return `@relation(fields: [${entityFieldName}], references: [${targetFieldName}], onDelete: ${onDelete})`;
}
