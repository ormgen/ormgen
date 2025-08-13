import { store } from '~/internals';
import { EntityField } from '~/modelling';
import { createMetaName } from './index.meta';

function createModelFieldType(field: EntityField): string {
	const fieldName = field.$name;
	const entityName = field.$entityInput.name;

	const entity = store.getEntity(entityName);

	switch (field.type) {
		case 'text':
			return 'z.string()';
		case 'int':
			return 'z.number()';
		case 'boolean':
			return 'z.boolean()';
		case 'datetime':
			return 'datetimeSchema';
		case 'enum':
			const e = store.getEnum(field.enum);
			const valueString = JSON.stringify(e.values);

			return `z.enum(${valueString})`;
		case 'json':
			const metaName = createMetaName(entity);

			return `${metaName}.${fieldName}`;
	}

	return '';
}

function createModelFieldArrayModifier(field: EntityField): string {
	if ('isArray' in field) {
		return field.isArray ? '.array()' : '';
	}

	return '';
}

export function createModelField(field: EntityField): string {
	const { $name, extra, isNullable } = field;

	const type = extra?.zod?.customType || createModelFieldType(field);

	const modifier__nullable = isNullable ? '.nullable()' : '';
	const modifier__array = createModelFieldArrayModifier(field);

	if (extra?.zod?.hide) {
		return '';
	}

	if (type) {
		return `${$name}: ${type}${modifier__nullable}${modifier__array},`;
	}

	return '';
}
