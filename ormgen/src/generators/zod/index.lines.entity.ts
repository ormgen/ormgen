import { Entity } from '~/modelling';
import { createModelField } from './index.lines.entity.model';
import { createSeedPartials } from './index.lines.entity.model.seed';
import { ZodGeneratorConfig } from './index.config';

export function createEntityLines(config: ZodGeneratorConfig, entity: Entity): string[] {
	const fieldItems = Object.values(entity.fields);

	const modelFieldLines = fieldItems
		.map((field) => {
			return createModelField(config, field);
		})
		.filter(Boolean);

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
