import { createSeed } from 'ormgen';

export default createSeed({
	name: 'Product',

	data: [
		{
			uid: 'product-1',
			sku: 'sku-1',
			description: 'description-1',
			name: 'name-1',
			price: 100,
			stockQuantity: 10,
			attributes: {},
			createdAt: new Date().toISOString(),
		},
	],
});
