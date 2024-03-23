//################################################################
//################################################################
//#### OBS: This file is generated, do not modify it manually ####
//################################################################
//################################################################
import { z } from 'zod';
import { GLOBAL_ENUM, ORDER_STATUS } from '@ormgen/__generated';
export const GLOBAL_ENUM__SCHEMA = z.nativeEnum(GLOBAL_ENUM);
export const ORDER_STATUS__SCHEMA = z.nativeEnum(ORDER_STATUS);
import { meta as ProductMeta } from '../../src/entities/Product/index.meta';

export namespace Order {
	export const model = z.object({
		uid: z.string(),
		status: z.enum(['ORDERED', 'SHIPPED']),
		orderDate: z.date(),
		totalPrice: z.number(),
		userUid: z.string(),
		createdAt: z.date(),
		updatedAt: z.date(),
	});

	export const seed = z
		.object({
			uid: z.string(),
			status: z.enum(['ORDERED', 'SHIPPED']),
			orderDate: z.date(),
			totalPrice: z.number(),
			userUid: z.string(),
			createdAt: z.date(),
			updatedAt: z.date(),
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
		orderUid: z.string(),
		productUid: z.string(),
		quantity: z.number(),
	});

	export const seed = z
		.object({
			uid: z.string(),
			orderUid: z.string(),
			productUid: z.string(),
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
		attributes: ProductMeta.attributes,
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
			attributes: ProductMeta.attributes,
			createdAt: z.date(),
		})
		.partial({ attributes: true });

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
		productUid: z.string(),
		productCategoryUid: z.string(),
	});

	export const seed = z
		.object({
			productUid: z.string(),
			productCategoryUid: z.string(),
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
		userUid: z.string(),
	});

	export const seed = z
		.object({
			uid: z.string(),
			rating: z.number(),
			comment: z.string(),
			createdAt: z.date(),
			userUid: z.string(),
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
