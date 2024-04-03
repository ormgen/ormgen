import { createEntity } from 'ormgen';

export default createEntity({
	name: 'MembershipType',

	id: 'alias',

	fields: {
		name: {
			type: 'text',
		},
	},
});
