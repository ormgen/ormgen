import { createEntity } from 'ormgen';

export default createEntity(({ mx }) => {
	return {
		name: 'User',

		id: 'uid',

		fields: {
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

			createdAt: mx.$createdAtField(),
			updatedAt: mx.$updatedAtField(),
		},
	};
});
