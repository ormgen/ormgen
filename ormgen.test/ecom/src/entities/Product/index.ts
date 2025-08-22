import { createEntity } from 'ormgen';

export default createEntity(({ mx }) => {
	return {
		name: 'Product',

		id: 'uid',

		fields: {
			name: {
				type: 'text',
			},
			description: {
				type: 'text',
			},
			price: {
				type: 'int',
			},
			stockQuantity: {
				type: 'int',
			},
			sku: {
				type: 'text',
				isUnique: true,
			},

			attributes: {
				type: 'json',

				defaultValue: { test: true },
			},

			createdAt: mx.$createdAtField(),
		},

		indexes: [
			{
				name: 'nameAndSku',
				fields: ['name', 'sku'],
				variant: 'unique',
			},
		],
	};
});
