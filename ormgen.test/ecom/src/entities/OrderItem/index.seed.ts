import { createSeed } from 'ormgen';

export default createSeed({
	name: 'OrderItem',

	seed: [
		{
			uid: 'orderItem-1',
			orderUid: 'order-1',
			productUid: 'product-1',
			quantity: 1,
		},
	],
});
