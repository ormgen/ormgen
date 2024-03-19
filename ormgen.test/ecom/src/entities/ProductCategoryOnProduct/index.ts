import { createEntity } from 'ormgen';

export default createEntity({
	name: 'ProductCategoryOnProduct',

	id: null,

	fields: {
		product: {
			type: 'relation',

			targetEntityName: 'Product',
			targetEntityFieldName: 'onCategories',

			onDelete: 'Cascade',
		},

		productCategory: {
			type: 'relation',

			targetEntityName: 'ProductCategory',
			targetEntityFieldName: 'onProducts',

			onDelete: 'Cascade',
		},
	},

	indexes: [
		{
			name: 'productAndCategory',
			fields: ['productUid', 'productCategoryUid'],
			type: 'id',
		},
	],
});
