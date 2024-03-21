import { Entity, EntityField } from '~/modelling';

function createFieldType(field: EntityField) {
	switch (field.type) {
		case 'text':
			return 'string';
		case 'boolean':
			return 'boolean';
		case 'int':
			return 'number';
		case 'datetime':
			return 'Date';
		case 'json':
			return 'any';
	}

	return null;
}

function createFieldTypeString(field: EntityField) {
	const { isNullable } = field;

	const type = createFieldType(field);

	if (!type) {
		return null;
	}

	const nullString = isNullable ? ' | null' : '';

	return type + nullString;
}

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
