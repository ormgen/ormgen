import { createEntity } from 'ormgen';

export default createEntity({
	name: 'OrderItem',

	id: 'uid',

	fields: {
		order: {
			type: 'relation',

			targetEntityName: 'Order',

			onDelete: 'Cascade',
		},

		product: {
			type: 'relation',

			targetEntityName: 'Product',

			onDelete: 'Restrict',
		},

		quantity: {
			type: 'int',
		},
	},
});
