import { Entity } from '~/modelling';

export function createEntities(entities: Entity[]) {
	return [`export type Entities = {`, ...entities.map((e) => `    ${e.name}: ${e.name};`), `}`];
}
