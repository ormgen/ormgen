import { EntityField } from '~/modelling';

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
		case 'vector':
			return 'Vector';
		case 'enum':
			return field.enum;
		case 'relation':
			return field.targetEntityName;
		case 'relationTarget':
			return field.sourceEntityName;
	}
}

export function createFieldType(field: EntityField): string {
	const { isNullable } = field;

	const type = createFieldTypeSingle(field);

	const optional = isNullable ? '?' : '';

	if (field.type === 'relation') {
		return `${type}${optional}`;
	}

	if (field.type === 'relationTarget') {
		const { targetMode } = field.$getSourceEntityField();

		const isOne = targetMode == 'one';
		const array = isOne ? '' : '[]';

		return `${type}${optional}${array}`;
	}

	return `${type}${optional}`;
}
