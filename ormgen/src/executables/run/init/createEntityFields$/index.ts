import { flattenArrayable } from '~/helpers';
import { Entity, EntityFields } from '~/modelling';
import { createRelationKeyFieldName, getEntity } from '~/utils';
import { createRelationKeyField } from '~/utils/createRelationKeyField';

export function createEntityFields$(entity: Entity, entities: Entity[]): EntityFields {
	const fields = flattenArrayable(entity.fields);

	const fieldNames = Object.keys(fields);

	const entityFields: EntityFields = {};

	fieldNames.forEach((fieldName) => {
		const field = fields[fieldName];

		if (field.type === 'relation') {
			const targetEntity = getEntity.safe(field.targetEntityName, entities);
			const relationKeyFieldName = createRelationKeyFieldName({ field, targetEntity });

			entityFields[relationKeyFieldName] = createRelationKeyField({ field, targetEntity });
		}

		entityFields[fieldName] = fields[fieldName];
	});

	return entityFields;
}
