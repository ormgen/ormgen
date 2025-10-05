import { EntityField } from '~/modelling';

function createFieldTypeModifier(field: EntityField): string {
	if (field.isNullable) {
		return '?';
	}

	if (field.type === 'relation') {
		return '';
	}

	if (field.type === 'relationTarget') {
		const isOne = field.$sourceEntityField.targetMode === 'one';

		return isOne ? '?' : '[]';
	}

	return field.isArray ? '[]' : '';
}

function createFieldTypeSingle(field: EntityField): string {
	switch (field.type) {
		case 'text':
			return 'String';
		case 'boolean':
			return 'Boolean';
		case 'int':
			return 'Int';
		case 'datetime':
			return 'DateTime';
		case 'json':
			return 'Json';
		case 'enum':
			return field.enum;
		case 'relation':
			return field.targetEntityName;
		case 'relationTarget':
			return field.sourceEntityName;
		case 'unknown':
			const { customType } = field.extra?.prisma || {};

			if (customType) {
				return customType;
			}

			throw new Error(`Unknown field type: ${field.type}`);
	}
}

export function createFieldType(field: EntityField): string {
	const { extra } = field;

	const type = extra?.prisma?.customType || createFieldTypeSingle(field);

	const modifier = createFieldTypeModifier(field);

	return `${type}${modifier}`;
}
