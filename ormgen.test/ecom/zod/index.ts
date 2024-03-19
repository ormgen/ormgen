import { z } from 'zod';
export namespace Order {
	export const model = z.object({
		uid: z.string(),
		status: z.enum(['ORDERED', 'SHIPPED']),
		orderDate: z.date(),
		totalPrice: z.number(),
		user: z.string(),
	});
	export const seed = z
		.object({
			uid: z.string(),
			status: z.enum(['ORDERED', 'SHIPPED']),
			orderDate: z.date(),
			totalPrice: z.number(),
			user: z.string(),
		})
		.partial({ totalPrice: true });
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
export namespace OrderItem {
	export const model = z.object({
		uid: z.string(),
		order: z.string(),
		product: z.string(),
		quantity: z.number(),
	});
	export const seed = z
		.object({
			uid: z.string(),
			order: z.string(),
			product: z.string(),
			quantity: z.number(),
		})
		.partial({});
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
export namespace Product {
	export const model = z.object({
		uid: z.string(),
		name: z.string(),
		description: z.string(),
		price: z.number(),
		stockQuantity: z.number(),
		sku: z.string(),
		attributes: z.any(),
		createdAt: z.date(),
	});
	export const seed = z
		.object({
			uid: z.string(),
			name: z.string(),
			description: z.string(),
			price: z.number(),
			stockQuantity: z.number(),
			sku: z.string(),
			attributes: z.any(),
			createdAt: z.date(),
		})
		.partial({});
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
export namespace ProductCategory {
	export const model = z.object({
		uid: z.string(),
		name: z.string(),
		description: z.string(),
	});
	export const seed = z
		.object({
			uid: z.string(),
			name: z.string(),
			description: z.string(),
		})
		.partial({});
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
export namespace ProductCategoryOnProduct {
	export const model = z.object({
		product: z.string(),
		productCategory: z.string(),
	});
	export const seed = z
		.object({
			product: z.string(),
			productCategory: z.string(),
		})
		.partial({});
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
export namespace Review {
	export const model = z.object({
		uid: z.string(),
		rating: z.number(),
		comment: z.string(),
		createdAt: z.date(),
		user: z.string(),
	});
	export const seed = z
		.object({
			uid: z.string(),
			rating: z.number(),
			comment: z.string(),
			createdAt: z.date(),
			user: z.string(),
		})
		.partial({});
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
export namespace User {
	export const model = z.object({
		uid: z.string(),
		email: z.string(),
		name: z.string(),
		passwordHash: z.string(),
		lastLogin: z.date(),
		createdAt: z.date(),
		updatedAt: z.date(),
	});
	export const seed = z
		.object({
			uid: z.string(),
			email: z.string(),
			name: z.string(),
			passwordHash: z.string(),
			lastLogin: z.date(),
			createdAt: z.date(),
			updatedAt: z.date(),
		})
		.partial({});
	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;
	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
