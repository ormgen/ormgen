import { store } from '~/internals';
import { EntityField } from '~/modelling/';
import { createRelationKeyFieldName, createRelationTargetFieldName } from '~/helpers';

export function createRelationAttr(field: EntityField.Relation) {
	const { relationName, onDelete } = field;

	const targetEntity = store.getEntity(field.targetEntityName);

	const keyFieldName = createRelationKeyFieldName({ field: field, targetEntity });
	const targetFieldName = createRelationTargetFieldName({ field, targetEntity });

	const relationNameString = relationName ? `name: "${relationName}", ` : '';

	return `@relation(${relationNameString} fields: [${keyFieldName}], references: [${targetFieldName}], onDelete: ${onDelete})`;
}
