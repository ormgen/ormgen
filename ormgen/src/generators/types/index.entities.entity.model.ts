import { Entity } from '~/modelling';
import { createEntityFieldsLines } from './index.entities.entity.fields';

export function createEntityModelLines(entity: Entity) {
	const fieldItemLines = createEntityFieldsLines(entity, false);

	return [`export interface Model {`, ...fieldItemLines, `}`].filter(Boolean);
}
