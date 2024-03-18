import { EntityField } from '~/modelling';

export function createFieldType(field: EntityField) {
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
	}
}
