import { Entity$ } from '~/modelling';
import { EntityIndex } from '~/modelling/types/EntityIndex';
import { createIdField } from './index.lines.entity.id';
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

export function createEntityLines(entity: Entity$, entities: Entity$[]) {
	const { name, indexes = [] } = entity.source;
	const { fields } = entity.computed;

	const fieldArray = Object.entries(fields);

	return [
		`model ${name} {`,

		createIdField(entity),

		...fieldArray.map(([name, field]) => {
			return createField(name, field, entities);
		}),

		...indexes.map(createIndexField),
		'}',
	].filter(Boolean);
}
