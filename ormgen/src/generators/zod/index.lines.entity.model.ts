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
			return 'z.date()';
		case 'enum':
			const e = store.getEnum(field.enum);
			const valueString = JSON.stringify(e.values);

			return `z.enum(${valueString})`;
		case 'json':
			const metaName = createMetaName(entity);

			return `${metaName}.${fieldName}`;
		case 'vector':
			return `z.number().array()`;
	}

	return '';
}

export function createModelField(field: EntityField): string {
	const { $name } = field;

	const type = createModelFieldType(field);

	if (field.extra?.zod?.hide) {
		return '';
	}

	if (type) {
		return `${$name}: ${type},`;
	}

	return '';
}
