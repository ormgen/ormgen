import { EntityField } from '~/modelling';

export function createRelationTargetAttr(field: EntityField.RelationTarget) {
	const { sourceEntityName, $sourceEntityField } = field;

	const { relationName } = $sourceEntityField;

	if (!relationName) {
		return '';
	}

	return `@relation(name: "${relationName}")`;
}
