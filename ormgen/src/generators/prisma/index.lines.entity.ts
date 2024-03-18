import { Entity$ } from '~/modelling';
import { EntityIndex } from '~/modelling/types/EntityIndex';
import { createIdField } from './index.lines.entity.id';
import { createField } from './index.lines.entity.field';

function createIndexField(index: EntityIndex) {
	return '';
}

export function createEntityLines(entity: Entity$, entities: Entity$[]) {
	const { name, fields, indexes = [] } = entity.source;

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
