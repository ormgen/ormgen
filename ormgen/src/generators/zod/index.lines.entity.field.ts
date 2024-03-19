import { store } from '~/internals';
import { EntityField } from '~/modelling';

function createModelFieldType(field: EntityField): string {
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
			return 'z.any()';
		case 'vector':
			return `z.number().array()`;
	}

	return '';
}

export function createModelField(field: EntityField): string {
	const { $name } = field;

	const type = createModelFieldType(field);

	if (type) {
		return `${$name}: ${type},`;
	}

	return '';
}
