import { EntityField } from '~/modelling';
import { configStore } from './index.config';

function createFieldType(field: EntityField) {
	const { customTypes = {} } = configStore.config as any;

	const customType = customTypes[field.type];

	if (customType) {
		return customType;
	}

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

export function createFieldTypeString(field: EntityField) {
	const { isNullable } = field;

	const type = createFieldType(field);

	if (!type) {
		return null;
	}

	const nullString = isNullable ? ' | null' : '';

	return type + nullString;
}
