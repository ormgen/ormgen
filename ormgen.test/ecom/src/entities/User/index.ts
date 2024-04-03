import { createEntity } from 'ormgen';

export default createEntity(({ mx }) => {
	return {
		name: 'User',

		id: 'uid',

		fields: [
			{
				email: {
					type: 'text',

					isUnique: true,
				},

				name: {
					type: 'text',
				},

				passwordHash: {
					type: 'text',
				},

				lastLogin: {
					type: 'datetime',
				},

				membershipType: {
					type: 'relation',

					targetEntityName: 'MembershipType',
					targetEntityFieldName: 'users',

					onDelete: 'Restrict',
				},
			},
			mx.timestamps(),
		],
	};
});
