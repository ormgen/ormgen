import { Entity } from '~/modelling';
import { createModelField } from './index.lines.entity.model';
import { createSeedPartials } from './index.lines.entity.model.seed';
import { createMetaName } from './index.meta';

export function createEntityLines(entity: Entity): string[] {
	const fieldItems = Object.values(entity.fields);

	const modelFieldLines = fieldItems
		.map((field) => {
			return createModelField(field);
		})
		.filter(Boolean);

	const seedPartials = createSeedPartials(entity);

	const metaName = createMetaName(entity);

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
		`export const meta = ${metaName}`,
		'',
		`export type ModelSchema = typeof model;`,
		`export type Model = z.infer<typeof model>;`,
		'',
		`export type SeedSchema = typeof seed;`,
		`export type Seed = z.infer<typeof seed>;`,

		`export type Meta = typeof meta;`,
		`}`,
	];
}
