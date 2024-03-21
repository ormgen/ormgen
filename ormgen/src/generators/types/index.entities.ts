import { Entity } from '~/modelling';
import { createEntityModelLines } from './index.entities.entity.model';
import { createEntitySeedLines } from './index.entities.entity.seed';

export function createEntitiesTypeLines(entities: Entity[]) {
	return [`export type Entities = {`, ...entities.map((e) => `    ${e.name}: ${e.name};`), `}`];
}

export function createEntitiesNamespaceLines(entities: Entity[]) {
	const entitiesLines = entities
		.map((entity) => {
			const { name } = entity;

			const standardLines = createEntityModelLines(entity);
			const seedLines = createEntitySeedLines(entity);

			return [`export namespace ${name} {`, ...standardLines, '', ...seedLines, `}`, ''];
		})
		.flat(2);

	return [`export namespace Entities {`, ...entitiesLines, `}`];
}
