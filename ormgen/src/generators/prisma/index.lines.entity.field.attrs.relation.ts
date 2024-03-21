import { store } from '~/internals';
import { EntityField } from '~/modelling/';
import { createRelationKeyFieldName, createRelationTargetFieldName } from '~/helpers';

export function createRelationAttr(field: EntityField.Relation) {
	const { onDelete } = field;

	const targetEntity = store.getEntity(field.targetEntityName);

	const keyFieldName = createRelationKeyFieldName({ field: field, targetEntity });
	const targetFieldName = createRelationTargetFieldName({ field, targetEntity });

	return `@relation(fields: [${keyFieldName}], references: [${targetFieldName}], onDelete: ${onDelete})`;
}
