import { store } from '~/internals';
import { Entity, EntityField } from '~/modelling';
import { createMetaName } from './index.meta';

interface Config {
	entity: Entity;
	entityField: EntityField;
	absoluteEntityMetaFilePath: string | undefined;
}

function isMetaField(config: Config) {
	const { entityField, absoluteEntityMetaFilePath } = config;

	if (!absoluteEntityMetaFilePath) {
		return false;
	}

	const { meta } = require(absoluteEntityMetaFilePath);

	const metaSchema = meta[entityField.$name];

	return !!metaSchema;
}

function createModelFieldType(config: Config): string {
	const { entityField } = config;

	const fieldName = entityField.$name;
	const entityName = entityField.$entityInput.name;

	const entity = store.getEntity(entityName);

	if (isMetaField(config)) {
		return createMetaName(entity) + `.${fieldName}`;
	}

	switch (entityField.type) {
		case 'text':
			return 'z.string()';
		case 'int':
			return 'z.number()';
		case 'boolean':
			return 'z.boolean()';
		case 'datetime':
			return 'datetimeSchema';
		case 'enum':
			const enumShape = store.getEnum(entityField.enum);
			const valueString = JSON.stringify(enumShape.values);

			return `z.enum(${valueString})`;
		case 'json':
			return 'z.any()';
	}

	return '';
}

function createModelFieldArrayModifier(config: Config): string {
	const { entityField } = config;

	if ('isArray' in entityField) {
		return entityField.isArray ? '.array()' : '';
	}

	return '';
}

export function createModelField(config: Config): string {
	const { entityField } = config;
	const { $name, extra, isNullable } = entityField;

	const type = extra?.zod?.customType || createModelFieldType(config);

	const modifier__nullable = isNullable ? '.nullable()' : '';
	const modifier__array = createModelFieldArrayModifier(config);

	if (extra?.zod?.hide) {
		return '';
	}

	if (type) {
		return `${$name}: ${type}${modifier__nullable}${modifier__array},`;
	}

	return '';
}
