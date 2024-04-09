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
		orderDate: z.coerce.string(),
		totalPrice: z.number(),
		userUid: z.string(),
		createdAt: z.coerce.string(),
		updatedAt: z.coerce.string(),
	});

	export const seed = z
		.object({
			uid: z.string(),
			status: z.enum(['ORDERED', 'SHIPPED']),
			orderDate: z.coerce.string(),
			totalPrice: z.number(),
			userUid: z.string(),
			createdAt: z.coerce.string(),
			updatedAt: z.coerce.string(),
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
		createdAt: z.coerce.string(),
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
			createdAt: z.coerce.string(),
		})
		.partial({ attributes: true, createdAt: true });

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
		createdAt: z.coerce.string(),
		userUid: z.string(),
	});

	export const seed = z
		.object({
			uid: z.string(),
			rating: z.number(),
			comment: z.string(),
			createdAt: z.coerce.string(),
			userUid: z.string(),
		})
		.partial({ createdAt: true });

	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;

	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}

export namespace User {
	export const model = z.object({
		uid: z.string(),
		email: z.string(),
		name: z.string().nullable(),
		passwordHash: z.string(),
		lastLogin: z.coerce.string(),
		membershipTypeAlias: z.string().nullable(),
		createdAt: z.coerce.string(),
		updatedAt: z.coerce.string(),
	});

	export const seed = z
		.object({
			uid: z.string(),
			email: z.string(),
			name: z.string().nullable(),
			passwordHash: z.string(),
			lastLogin: z.coerce.string(),
			membershipTypeAlias: z.string().nullable(),
			createdAt: z.coerce.string(),
			updatedAt: z.coerce.string(),
		})
		.partial({ name: true, membershipTypeAlias: true, createdAt: true, updatedAt: true });

	export type ModelSchema = typeof model;
	export type Model = z.infer<typeof model>;

	export type SeedSchema = typeof seed;
	export type Seed = z.infer<typeof seed>;
}
