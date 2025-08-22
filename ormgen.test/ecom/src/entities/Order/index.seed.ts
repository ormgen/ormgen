import { createSeed } from 'ormgen';

export default createSeed({
	name: 'Order',

	seed: [
		{
			uid: 'order-1',
			status: 'ORDERED',
			orderDate: new Date().toISOString(),
			totalPrice: 100,
			userUid: 1,
		},
	],
});
