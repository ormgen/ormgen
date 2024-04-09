import { configStore, store } from '~/internals';
import { EntityField } from '~/modelling';
import { createMetaName } from './index.meta';

function createModelFieldType(field: EntityField): string {
	const { dateMode = 'string' } = configStore.instance!;

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
			return `z.coerce.${dateMode}()`;
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

export function createModelField(field: EntityField): string {
	const { $name, extra, isNullable } = field;

	const type = extra?.zod?.customType || createModelFieldType(field);
	const nullable = isNullable ? '.nullable()' : '';

	if (extra?.zod?.hide) {
		return '';
	}

	if (type) {
		return `${$name}: ${type}${nullable},`;
	}

	return '';
}
