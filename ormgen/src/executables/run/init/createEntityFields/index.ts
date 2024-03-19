import { flattenArrayable } from '~/helpers';
import { Entity__Input, EntityField__Input, EntityFields, EntityFieldType } from '~/modelling';
import { createEntityField } from '../createEntityField';
import { createRelationKeyField, createRelationKeyFieldName, findTargettingEntities, getEntityInput } from '~/utils';

function addRelationTargetFields(entityFields: EntityFields, entityInput: Entity__Input) {
	const results = findTargettingEntities(entityInput.name);

	results.forEach((result) => {
		const { targettingEntityInput, targettingField, targettingFieldName } = result;

		entityFields[targettingField.targetEntityFieldName] = {
			$input: null,

			$name: targettingFieldName,

			type: 'relationTarget',

			sourceEntityName: targettingEntityInput.name,

			$getEntityInput() {
				return entityInput;
			},

			$getSourceEntity() {
				return targettingEntityInput;
			},
			$getSourceEntityField() {
				return targettingField;
			},
		};
	});
}

function addEntityFields(entityFields: EntityFields, fieldName: string, fieldInput: EntityField__Input, entity: Entity__Input) {
	if (fieldInput.type === 'relation') {
		const field = createEntityField(fieldName, fieldInput, entity) as EntityFieldType.Relation;

		const targetEntity = getEntityInput.safe(fieldInput.targetEntityName);
		const relationKeyFieldName = createRelationKeyFieldName({ field, targetEntity });

		entityFields[relationKeyFieldName] = createRelationKeyField({ fieldName, field, targetEntity });
	}

	entityFields[fieldName] = createEntityField(fieldName, fieldInput, entity);
}

export function createEntityFields(entityInput: Entity__Input): EntityFields {
	const fields = flattenArrayable(entityInput.fields);

	const fieldNames = Object.keys(fields);

	const entityFields: EntityFields = {};

	fieldNames.forEach((fieldName) => {
		addEntityFields(entityFields, fieldName, fields[fieldName], entityInput);
	});

	addRelationTargetFields(entityFields, entityInput);

	return entityFields;
}
