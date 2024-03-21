import { createSeed } from 'ormgen';

export default createSeed({
	name: 'Order',

	data: [
		{
			uid: 'order-1',
			orderDate: new Date().toISOString(),
			totalPrice: 100,
			userUid: 'user-1',
		},
	],
});
