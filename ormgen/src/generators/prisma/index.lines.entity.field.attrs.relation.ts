import { EntityFieldType } from '~/modelling/';
import { createRelationKeyFieldName, createRelationTargetFieldName, getEntity } from '~/utils';

export function createRelationAttr(field: EntityFieldType.Relation) {
	const { onDelete } = field;

	const targetEntity = getEntity.safe(field.targetEntityName);

	const keyFieldName = createRelationKeyFieldName({ field: field, targetEntity });
	const targetFieldName = createRelationTargetFieldName({ field, targetEntity });

	return `@relation(fields: [${keyFieldName}], references: [${targetFieldName}], onDelete: ${onDelete})`;
}
