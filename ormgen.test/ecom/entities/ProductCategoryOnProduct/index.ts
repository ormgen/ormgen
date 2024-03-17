import { createEntity } from 'ormgen';

export default createEntity({
	name: 'ProductCategoryOnProduct',

	id: null,

	fields: {
		product: {
			type: 'relation',

			targetEntityName: 'Product',

			onDelete: 'Cascade',
		},

		productCategory: {
			type: 'relation',

			targetEntityName: 'ProductCategory',

			onDelete: 'Cascade',
		},
	},

	indexes: [
		{
			name: 'productAndCategory',
			fields: ['productUid', 'categoryUid'],
			type: 'id',
		},
	],
});
