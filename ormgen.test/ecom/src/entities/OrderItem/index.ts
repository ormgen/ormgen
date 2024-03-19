import { createEntity } from 'ormgen';

export default createEntity({
	name: 'OrderItem',

	id: 'uid',

	fields: {
		order: {
			type: 'relation',

			targetEntityName: 'Order',
			targetEntityFieldName: 'orderItems',

			onDelete: 'Cascade',
		},

		product: {
			type: 'relation',

			targetEntityName: 'Product',
			targetEntityFieldName: 'orderItems',

			onDelete: 'Restrict',
		},

		quantity: {
			type: 'int',
		},
	},
});
