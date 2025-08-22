import { createEntity } from 'ormgen';

export default createEntity(({ mx }) => {
	return {
		name: 'User',

		id: null,

		fields: [
			{
				uid: {
					type: 'int',
					isPrimary: true,
				},
				email: {
					type: 'text',

					isUnique: true,
				},

				name: {
					type: 'text',

					isNullable: true,
				},

				passwordHash: {
					type: 'text',
				},

				lastLogin: {
					type: 'datetime',
				},

				membershipType: {
					type: 'relation',

					isNullable: true,

					targetEntityName: 'MembershipType',
					targetEntityFieldName: 'users',

					onDelete: 'Restrict',
				},
			},
			mx.timestamps(),
		],
	};
});
