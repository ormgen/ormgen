import { EntityField } from '~/modelling';
import { createRelationAttr } from './index.lines.entity.field.attrs.relation';

function createIdAttr(field: EntityField) {
	if ('isID' in field) {
		if (field.isID) {
			return '@id';
		}
	}
}

function createDefaultAttr(field: EntityField) {
	if ('defaultValue' in field) {
		return `@default(${field.defaultValue})`;
	}
}

function createTypeAttrs(field: EntityField): string[] {
	if (field.type === 'relation') {
		return [createRelationAttr(field)];
	}

	const defaultAttr = createDefaultAttr(field);

	return [defaultAttr].filter(Boolean) as string[];
}

export function createAttrs(field: EntityField): string[] {
	const { isUnique } = field;

	const idAttr = createIdAttr(field);

	const uniqueAttr = isUnique && '@unique';

	const typeAttrs = createTypeAttrs(field);

	return [idAttr, uniqueAttr, ...typeAttrs].filter(Boolean) as string[];
}
