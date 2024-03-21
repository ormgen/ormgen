import { Entity } from '~/modelling';
import { createModelField } from './index.lines.entity.model';
import { createSeedPartials } from './index.lines.entity.model.seed';

export function createEntityLines(entity: Entity, entities: Entity[]): string[] {
	const fieldItems = Object.values(entity.fields);

	const modelFieldLines = fieldItems.map(createModelField).filter(Boolean);

	const seedPartials = createSeedPartials(entity);

	return [
		// <>
		`export namespace ${entity.name} {`,
		`export const model = z.object({`,
		...modelFieldLines,
		`})`,
		'',
		`export const seed = z.object({`,
		...modelFieldLines,
		`})${seedPartials}`,
		'',
		`export type ModelSchema = typeof model;`,
		`export type Model = z.infer<typeof model>;`,
		'',
		`export type SeedSchema = typeof seed;`,
		`export type Seed = z.infer<typeof seed>;`,
		`}`,
	];
}
