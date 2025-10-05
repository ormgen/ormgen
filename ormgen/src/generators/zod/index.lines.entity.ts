import { Entity } from '~/modelling';
import { createModelField } from './index.lines.entity.model';
import { createSeedPartials } from './index.lines.entity.model.seed';
import { createMetaName } from './index.meta';

export function createEntityLines(config: { entity: Entity; absoluteEntityMetaFilePath: string | undefined }): string[] {
	const { entity, absoluteEntityMetaFilePath } = config;

	const fieldItems = Object.values(entity.fields);

	const modelFieldLines = fieldItems
		.map((entityField) => {
			return createModelField({ entity, entityField, absoluteEntityMetaFilePath });
		})
		.filter(Boolean);

	const seedPartials = createSeedPartials(entity);

	const hasMetaFile = !!absoluteEntityMetaFilePath;

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
		hasMetaFile ? `export const meta = ${metaName}` : '',
		'',
		`export type ModelSchema = typeof model;`,
		`export type Model = z.infer<typeof model>;`,
		'',
		`export type SeedSchema = typeof seed;`,
		`export type Seed = z.infer<typeof seed>;`,
		'',
		hasMetaFile ? `export type Meta = InferZodTypes<typeof meta>;` : '',
		`}`,
	];
}
