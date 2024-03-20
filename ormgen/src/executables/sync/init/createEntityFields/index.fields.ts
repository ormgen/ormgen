import { EntityField, EntityField__Input, EntityFields, Entity__Input } from '~/modelling';
import { createEntityField } from '../createEntityField';
import { store } from '~/internals';
import { createRelationKeyField, createRelationKeyFieldName } from '~/utils';

export function addEntityFields(entityFields: EntityFields, fieldName: string, fieldInput: EntityField__Input, entity: Entity__Input) {
	if (fieldInput.type === 'relation') {
		const field = createEntityField(fieldName, fieldInput, entity) as EntityField.Relation;

		const targetEntity = store.getEntityInput(fieldInput.targetEntityName);
		const relationKeyFieldName = createRelationKeyFieldName({ field, targetEntity });

		entityFields[relationKeyFieldName] = createRelationKeyField({ fieldName, field, targetEntity });
	}

	entityFields[fieldName] = createEntityField(fieldName, fieldInput, entity);
}
