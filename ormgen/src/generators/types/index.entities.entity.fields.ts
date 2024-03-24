import { Entity, EntityField } from '~/modelling';
import { createFieldTypeString } from './index.entities.entity.fields.type';

function getOptionalStatus(field: EntityField) {
	if (field.type === 'datetime') {
		return field.defaultNow ? true : false;
	}

	return field.defaultValue !== undefined;
}

function createNameString(field: EntityField, isSeed: boolean) {
	const { $name } = field;

	const isOptional = getOptionalStatus(field);

	const optionalFlag = isOptional ? '?' : '';

	return $name + optionalFlag;
}

export function createEntityFieldsLines(entity: Entity, isSeed: boolean) {
	const { fields } = entity;

	const fieldItems = Object.values(fields);

	return fieldItems
		.map((field) => {
			const nameString = createNameString(field, isSeed);
			const typeString = createFieldTypeString(field);

			return typeString && `${nameString}: ${typeString};`;
		})
		.filter(Boolean);
}
