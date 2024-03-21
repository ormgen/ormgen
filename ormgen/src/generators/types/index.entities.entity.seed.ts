import { Entity } from '~/modelling';
import { createEntityFieldsLines } from './index.entities.entity.fields';

export function createEntitySeedLines(entity: Entity): string[] {
	return [`export interface Seed {`, ...createEntityFieldsLines(entity, true), `}`];
}
