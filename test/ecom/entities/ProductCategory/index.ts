import { createEntity } from 'ormgen';

export default createEntity({
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
