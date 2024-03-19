import { Entity } from '~/modelling';
import { EntityIndex } from '~/modelling/types/EntityIndex';
import { createField } from './index.lines.entity.field';

function createIndexField(index: EntityIndex) {
	const { name, fields, type } = index;

	switch (type) {
		case 'id':
			return `@@id(name: "${name}", [${fields.join(', ')}])`;
		case 'unique':
			return `@@unique(name: "${name}", [${fields.join(', ')}])`;
	}
}

export function createEntityLines(entity: Entity) {
	const { name, fields, indexes = [] } = entity;

	const fieldArray = Object.entries(fields);

	return [
		`model ${name} {`,

		...fieldArray.map(([name, field]) => {
			return createField(name, field);
		}),

		...indexes.map(createIndexField),
		'}',
	].filter(Boolean);
}
