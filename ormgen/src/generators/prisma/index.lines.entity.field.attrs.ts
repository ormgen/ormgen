import { EntityField } from '~/modelling';
import { createRelationAttr } from './index.lines.entity.field.attrs.relation';
import { createDefaultAttr } from './index.lines.entity.field.attrs.default';
import { createRelationTargetAttr } from './index.lines.entity.field.attrs.relationTarget';

function createTypeAttrs(field: EntityField): string[] {
	if (field.type === 'relation') {
		return [createRelationAttr(field)];
	}

	if (field.type === 'relationTarget') {
		return [createRelationTargetAttr(field)];
	}

	if (field.type === 'datetime') {
		if (field.onUpdate) {
			return ['@updatedAt'];
		}
	}

	if ("$isRelationKey" in field) {
		if (field.$targetEntityField.targetMode === 'one') {
			return ['@unique'];
		}
	}

	return [];
}

export function createAttrs(field: EntityField): string[] {
	const { isUnique, isPrimary, extra } = field;

	const idAttr = isPrimary && '@id';
	const uniqueAttr = isUnique && '@unique';

	const defaultAttr = createDefaultAttr(field);
	const typeAttrs = createTypeAttrs(field);

	return [idAttr, uniqueAttr, defaultAttr, ...typeAttrs, extra?.prisma?.customAttributes].filter(Boolean);
}
