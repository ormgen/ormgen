import { store } from '~/internals';
import { EntityField } from '~/modelling';
import { createMetaName } from './index.meta';
import { ZodGeneratorConfig } from './index.config';

function createModelFieldType(config: ZodGeneratorConfig, field: EntityField): string {
	const { dateMode = 'string' } = config;

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

export function createModelField(config: ZodGeneratorConfig, field: EntityField): string {
	const { $name, extra } = field;

	const type = extra?.zod?.customType || createModelFieldType(config, field);

	if (extra?.zod?.hide) {
		return '';
	}

	if (type) {
		return `${$name}: ${type},`;
	}

	return '';
}
