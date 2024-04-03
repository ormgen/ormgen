import { configStore } from '~/internals';
import { EntityField } from '~/modelling';

function createFieldType(field: EntityField): string | null {
	const { customTypes = {} } = configStore.types!;

	const customType = (customTypes as any)[field.type];

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
		case 'enum':
			return field.enum;
		case 'relation':
			return null;
		case 'relationTarget':
			return null;
		case 'unknown':
			return 'unknown';
	}
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
