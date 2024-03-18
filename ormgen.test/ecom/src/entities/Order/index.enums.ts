import { createEnum } from 'ormgen';

createEnum({
	name: 'ORDER_STATUS',
	values: ['ORDERED', 'SHIPPED'],
});
