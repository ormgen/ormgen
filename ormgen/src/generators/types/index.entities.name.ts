import { Entity } from '~/modelling';

export function createEntityNameLines(entities: Entity[]) {
	return [`export type EntityName = ${entities.map((e) => `'${e.name}'`).join(' | ')};`];
}
