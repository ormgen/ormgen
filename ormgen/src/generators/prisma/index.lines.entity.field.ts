import { EntityField } from '~/modelling';

import { createFieldType } from './index.lines.entity.field.type';
import { createAttrs } from './index.lines.entity.field.attrs';

export function createField(fieldName: string, field: EntityField): string {
	const type = createFieldType(field);
	const attrs = createAttrs(field);

	return `${fieldName} ${type} ${attrs.join(' ')}`;
}
