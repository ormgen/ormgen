import { createEntity } from 'ormgen';

export default createEntity({
	name: 'ProductCategory',
	
	id: 'uid',

	fields: {
		name: {
			type: 'text',

			isUnique: true,
		},

		description: {
			type: 'text',
		},
	},
});
