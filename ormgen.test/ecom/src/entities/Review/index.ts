import { createEntity } from 'ormgen';

export default createEntity(({ mx }) => {
	return {
		name: 'Review',

		id: 'uid',

		fields: {
			rating: {
				type: 'int',
			},

			comment: {
				type: 'text',
			},

			createdAt: mx.$createdAtField(),

			user: {
				type: 'relation',

				targetEntityName: 'User',

				onDelete: 'Cascade',
			},
		},
	};
});
