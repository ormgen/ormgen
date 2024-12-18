import { Entity } from '~/modelling';
import { EntityIndex } from '~/modelling/types/EntityIndex';
import { createField } from './index.lines.entity.field';

function createIndexField(index: EntityIndex) {
	const { name, fields, variant, type = 'BTree' } = index;

	switch (variant) {
		case 'id':
			return `@@id(name: "${name}", fields: [${fields.join(', ')}])`;
		case 'unique':
			return `@@unique(name: "${name}", fields: [${fields.join(', ')}])`;
		case 'index':
			return `@@index(name: "${name}", fields: [${fields.join(', ')}], type: ${type})`;
	}
}

export function createEntityLines(entity: Entity) {
	const { name, fields, indexes = [] } = entity;

	const fieldArray = Object.entries(fields);

	return [
		`model ${name} {`,
		entity.extra?.prisma?.entityTop,

		...fieldArray.map(([name, field]) => {
			return createField(name, field);
		}),

		...indexes.map(createIndexField),

		entity.extra?.prisma?.entityBottom,
		'}',
	].filter(Boolean);
}
