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

			// commentVector: {
			// 	type: 'unknown',

			// 	extra: {
			// 		prisma: {
			// 			customType: 'Unsupported("vector")',
			// 		},
			// 		zod: {
			// 			customType: 'z.number().array()',
			// 		},
			// 	},
			// },

			createdAt: mx.$createdAtField(),

			user: {
				type: 'relation',

				targetEntityName: 'User',
				targetEntityFieldName: 'reviews',

				onDelete: 'Cascade',
			},
		},
	};
});
