import { Entity } from '~/modelling';
import { createEntityFieldsLines } from './index.entities.entity.fields';

export function createEntityModelLines(entity: Entity) {
	const fieldItemLines = createEntityFieldsLines(entity, false);

	const lines = [`export interface Model {`, ...fieldItemLines, `}`];

	return lines.filter(Boolean) as string[];
}
