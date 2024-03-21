import { flattenArrayable } from '~/helpers/utils';
import { Entity__Input, EntityFields } from '~/modelling';
import { addIdField } from './index.fields.id';
import { addRelationTargetFields } from './index.fields.relationTarget';
import { addEntityFields } from './index.fields';

export function createEntityFields(entityInput: Entity__Input): EntityFields {
	const fields = flattenArrayable(entityInput.fields);

	const fieldNames = Object.keys(fields);

	const entityFields: EntityFields = {};

	addIdField(entityFields, entityInput);

	fieldNames.forEach((fieldName) => {
		addEntityFields(entityFields, fieldName, fields[fieldName], entityInput);
	});

	addRelationTargetFields(entityFields, entityInput);

	return entityFields;
}
