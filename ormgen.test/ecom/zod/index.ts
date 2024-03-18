import { z } from 'zod';
export namespace Order {
	export const model = z.object({});
	export const seed = z.object({});
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
export namespace OrderItem {
	export const model = z.object({});
	export const seed = z.object({});
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
export namespace Product {
	export const model = z.object({});
	export const seed = z.object({});
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
export namespace ProductCategory {
	export const model = z.object({});
	export const seed = z.object({});
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
export namespace ProductCategoryOnProduct {
	export const model = z.object({});
	export const seed = z.object({});
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
export namespace Review {
	export const model = z.object({});
	export const seed = z.object({});
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
export namespace User {
	export const model = z.object({});
	export const seed = z.object({});
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
