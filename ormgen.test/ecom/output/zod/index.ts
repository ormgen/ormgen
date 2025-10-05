//################################################################
//################################################################
//#### OBS: This file is generated, do not modify it manually ####
//################################################################
//################################################################

import { z } from 'zod';
import { GLOBAL_ENUM, ORDER_STATUS } from '@ormgen/__generated';

import { meta as ProductMeta } from '../../src/entities/Product/index.meta';

export const GLOBAL_ENUM__SCHEMA = z.nativeEnum(GLOBAL_ENUM);
export const ORDER_STATUS__SCHEMA = z.nativeEnum(ORDER_STATUS);

export const datetimeSchema = z.coerce.date().transform((val) => val.toISOString());

// Extracts all zod types from a zod schema or object
export type InferZodTypes<T> = T extends z.ZodTypeAny ? z.infer<T> : T extends Record<string, any> ? { [V in keyof T]: InferZodTypes<T[V]> } : T;

export namespace MembershipType {
	export const model = z.object({
		alias: z.string(),
		name: z.string(),
	});

	export const seed = z
		.object({
			alias: z.string(),
			name: z.string(),
		})
		.partial({});

	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;

	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}

export namespace Order {
	export const model = z.object({
		uid: z.string(),
		status: z.enum(['ORDERED', 'SHIPPED']),
		orderDate: datetimeSchema,
		totalPrice: z.number(),
		userUid: z.number(),
		createdAt: datetimeSchema,
		updatedAt: datetimeSchema,
	});

	export const seed = z
		.object({
			uid: z.string(),
			status: z.enum(['ORDERED', 'SHIPPED']),
			orderDate: datetimeSchema,
			totalPrice: z.number(),
			userUid: z.number(),
			createdAt: datetimeSchema,
			updatedAt: datetimeSchema,
		})
		.partial({ orderDate: true, totalPrice: true, createdAt: true, updatedAt: true });

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
		createdAt: datetimeSchema,
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
			createdAt: datetimeSchema,
		})
		.partial({ attributes: true, createdAt: true });

	export const meta = ProductMeta;

	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;

	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;

	export type Meta = InferZodTypes<typeof meta>;
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

export namespace ProductInventory {
	export const model = z.object({
		uid: z.string(),
		stockQuantity: z.number(),
		lastUpdatedAt: datetimeSchema,
		productUid: z.string(),
	});

	export const seed = z
		.object({
			uid: z.string(),
			stockQuantity: z.number(),
			lastUpdatedAt: datetimeSchema,
			productUid: z.string(),
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
		createdAt: datetimeSchema,
		userUid: z.number(),
	});

	export const seed = z
		.object({
			uid: z.string(),
			rating: z.number(),
			comment: z.string(),
			createdAt: datetimeSchema,
			userUid: z.number(),
		})
		.partial({ createdAt: true });

	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;

	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}

export namespace Template {
	export const model = z.object({
		uid: z.string(),
		name: z.string(),
		specificUid: z.string(),
	});

	export const seed = z
		.object({
			uid: z.string(),
			name: z.string(),
			specificUid: z.string(),
		})
		.partial({});

	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;

	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}

export namespace User {
	export const model = z.object({
		uid: z.number(),
		email: z.string(),
		name: z.string().nullable(),
		passwordHash: z.string(),
		lastLogin: datetimeSchema,
		membershipTypeAlias: z.string().nullable(),
		createdAt: datetimeSchema,
		updatedAt: datetimeSchema,
	});

	export const seed = z
		.object({
			uid: z.number(),
			email: z.string(),
			name: z.string().nullable(),
			passwordHash: z.string(),
			lastLogin: datetimeSchema,
			membershipTypeAlias: z.string().nullable(),
			createdAt: datetimeSchema,
			updatedAt: datetimeSchema,
		})
		.partial({ name: true, membershipTypeAlias: true, createdAt: true, updatedAt: true });

	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;

	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
