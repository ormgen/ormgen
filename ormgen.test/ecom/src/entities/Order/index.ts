import { createEntity } from 'ormgen';

export default createEntity(({ mx }) => ({
	name: 'Order',

	id: 'uid',

	fields: [
		{
			status: {
				type: 'enum',
				enum: 'ORDER_STATUS',
			},

			orderDate: mx.$createdAtField(),

			totalPrice: {
				type: 'int',

				defaultValue: 0,
			},

			user: {
				type: 'relation',

				targetEntityName: 'User',
				targetEntityFieldName: 'orders',

				onDelete: 'Restrict',
			},
		},
		mx.timestamps(),
	],
}));
