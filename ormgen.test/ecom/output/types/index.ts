//################################################################
//################################################################
//#### OBS: This file is generated, do not modify it manually ####
//################################################################
//################################################################
export type EnumName = 'ORDER_STATUS' | 'GLOBAL_ENUM';
export type EntityName = 'Order' | 'OrderItem' | 'Product' | 'ProductCategory' | 'ProductCategoryOnProduct' | 'Review' | 'User';

export namespace Entities {
	export namespace Order {
		export interface Model {
			uid: string;
			orderDate: string;
			totalPrice: number;
			userUid: string;
		}

		export interface Seed {
			uid: string;
			orderDate: string;
			totalPrice?: number;
			userUid: string;
		}
	}

	export namespace OrderItem {
		export interface Model {
			uid: string;
			orderUid: string;
			productUid: string;
			quantity: number;
		}

		export interface Seed {
			uid: string;
			orderUid: string;
			productUid: string;
			quantity: number;
		}
	}

	export namespace Product {
		export interface Model {
			uid: string;
			name: string;
			description: string;
			price: number;
			stockQuantity: number;
			sku: string;
			attributes: any;
			createdAt: string;
		}

		export interface Seed {
			uid: string;
			name: string;
			description: string;
			price: number;
			stockQuantity: number;
			sku: string;
			attributes?: any;
			createdAt: string;
		}
	}

	export namespace ProductCategory {
		export interface Model {
			uid: string;
			name: string;
			description: string;
		}

		export interface Seed {
			uid: string;
			name: string;
			description: string;
		}
	}

	export namespace ProductCategoryOnProduct {
		export interface Model {
			productUid: string;
			productCategoryUid: string;
		}

		export interface Seed {
			productUid: string;
			productCategoryUid: string;
		}
	}

	export namespace Review {
		export interface Model {
			uid: string;
			rating: number;
			comment: string;
			createdAt: string;
			userUid: string;
		}

		export interface Seed {
			uid: string;
			rating: number;
			comment: string;
			createdAt: string;
			userUid: string;
		}
	}

	export namespace User {
		export interface Model {
			uid: string;
			email: string;
			name: string;
			passwordHash: string;
			lastLogin: string;
			createdAt: string;
			updatedAt: string;
		}

		export interface Seed {
			uid: string;
			email: string;
			name: string;
			passwordHash: string;
			lastLogin: string;
			createdAt: string;
			updatedAt: string;
		}
	}
}
export type AllEntityModels = {
	Order: Entities.Order.Model;
	OrderItem: Entities.OrderItem.Model;
	Product: Entities.Product.Model;
	ProductCategory: Entities.ProductCategory.Model;
	ProductCategoryOnProduct: Entities.ProductCategoryOnProduct.Model;
	Review: Entities.Review.Model;
	User: Entities.User.Model;
};

export type AllEntitySeeds = {
	Order: Entities.Order.Seed;
	OrderItem: Entities.OrderItem.Seed;
	Product: Entities.Product.Seed;
	ProductCategory: Entities.ProductCategory.Seed;
	ProductCategoryOnProduct: Entities.ProductCategoryOnProduct.Seed;
	Review: Entities.Review.Seed;
	User: Entities.User.Seed;
};
