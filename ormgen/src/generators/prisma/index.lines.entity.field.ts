import { Entity$, EntityField } from '~/modelling';

import { createFieldType } from './index.lines.entity.field.type';
import { createAttrs } from './index.lines.entity.field.attrs';

export function createField(fieldName: string, field: EntityField, entities: Entity$[]): string {
	const { isNullable } = field;

	const type = createFieldType(field);
	const attrs = createAttrs(field, entities);

	const optional = isNullable ? '?' : '';

	return `${fieldName} ${type}${optional} ${attrs.join(' ')}`;
}
