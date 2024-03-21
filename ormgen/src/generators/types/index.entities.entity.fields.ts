import { Entity, EntityField } from '~/modelling';
import { createFieldTypeString } from './index.entities.entity.fields.type';

function createNameString(field: EntityField, isSeed: boolean) {
	const { $name, defaultValue } = field;

	const isOptional = defaultValue !== undefined;

	if (isOptional && isSeed) {
		return $name + '?';
	}

	return $name;
}

export function createEntityFieldsLines(entity: Entity, isSeed: boolean) {
	const { fields } = entity;

	const fieldItems = Object.values(fields);

	const lines = fieldItems
		.map((field) => {
			const nameString = createNameString(field, isSeed);
			const typeString = createFieldTypeString(field);

			return typeString && `${nameString}: ${typeString};`;
		})
		.filter(Boolean);

	return lines as string[];
}
