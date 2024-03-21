import { createSeed } from 'ormgen';

export default createSeed({
	name: 'Order',

	data: [
		{
			uid: 'order-1',
			orderDate: new Date(),
			totalPrice: 100,
			user: 'user-1',
		},
	],
});
