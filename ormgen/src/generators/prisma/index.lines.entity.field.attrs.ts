import { EntityField } from '~/modelling';
import { createRelationAttr } from './index.lines.entity.field.attrs.relation';

function createDefaultValueString(field: EntityField) {
	const { type, defaultValue } = field;

	if (defaultValue === undefined) {
		return undefined;
	}

	const defaultValueString = JSON.stringify(defaultValue);

	if (type === 'enum') {
		return defaultValue;
	}

	if (type === 'json') {
		return JSON.stringify(defaultValueString);
	}

	return defaultValueString;
}

function createDefaultAttr(field: EntityField) {
	const defaultValueString = createDefaultValueString(field);

	return defaultValueString && `@default(${defaultValueString})`;
}

function createTypeAttrs(field: EntityField): string[] {
	if (field.type === 'relation') {
		return [createRelationAttr(field)];
	}

	return [];
}

export function createAttrs(field: EntityField): string[] {
	const { isUnique, isPrimary, extra } = field;

	const idAttr = isPrimary && '@id';
	const uniqueAttr = isUnique && '@unique';

	const defaultAttr = createDefaultAttr(field);
	const typeAttrs = createTypeAttrs(field);

	return [idAttr, uniqueAttr, defaultAttr, ...typeAttrs, extra?.prisma?.customAttributes].filter(Boolean) as string[];
}
