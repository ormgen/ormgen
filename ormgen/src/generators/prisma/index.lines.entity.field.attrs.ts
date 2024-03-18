import { Entity$, EntityField } from '~/modelling';
import { createRelationAttr } from './index.lines.entity.field.attrs.relation';

function createDefaultAttr(field: EntityField) {
	if ('defaultValue' in field) {
		return `@default(${field.defaultValue})`;
	}
}

function createTypeAttrs(field: EntityField, entities: Entity$[]): string[] {
	if (field.type === 'relation') {
		return [createRelationAttr(field, entities)];
	}

	const defaultAttr = createDefaultAttr(field);

	return [defaultAttr].filter(Boolean) as string[];
}

export function createAttrs(field: EntityField, entities: Entity$[]): string[] {
	const { isUnique } = field;

	const uniqueAttr = isUnique && '@unique';

	const typeAttrs = createTypeAttrs(field, entities);

	return [uniqueAttr, ...typeAttrs].filter(Boolean) as string[];
}
