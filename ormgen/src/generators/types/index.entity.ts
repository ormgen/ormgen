import { Entity, EntityField } from '~/modelling';

function createFieldType(field: EntityField) {
	switch (field.type) {
		case 'text':
			return 'string';
		case 'boolean':
			return 'boolean';
		case 'int':
			return 'number';
		case 'datetime':
			return 'Date';
		case 'json':
			return 'any';
	}

	return null;
}

export function createEntityLines(entity: Entity) {
	const { name, fields } = entity;

	const fieldItems = Object.values(fields);

	const fieldItemLines = fieldItems
		.map((field) => {
			const type = createFieldType(field);

			return type && `${field.$name}: ${type};`;
		})
		.filter(Boolean);

	const lines = [`export interface ${name} {`, ...fieldItemLines, `}`];

	return lines.filter(Boolean) as string[];
}
