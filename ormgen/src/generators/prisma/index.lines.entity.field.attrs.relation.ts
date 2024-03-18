import { Entity$, EntityFieldType } from '~/modelling/';
import { createRelationKeyFieldName, createRelationTargetFieldName, getEntity$ } from '~/utils';

export function createRelationAttr(field: EntityFieldType.Relation, entities: Entity$[]) {
	const { onDelete } = field;

	const targetEntity = getEntity$.safe(field.targetEntityName, entities);

	const keyFieldName = createRelationKeyFieldName({ field, targetEntity });
	const targetFieldName = createRelationTargetFieldName({ field, targetEntity });

	return `@relation(fields: [${keyFieldName}], references: [${targetFieldName}], onDelete: ${onDelete})`;
}
