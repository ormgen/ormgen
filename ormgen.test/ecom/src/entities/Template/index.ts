import { createEntity } from 'ormgen';

export default createEntity({
	name: 'Template',

	id: 'uid',

	fields: {
		name: {
			type: 'text',
		},

		parent: {
			type: 'relation',

			relationName: 'parent',

			sourceEntityKeyFieldName: 'specificUid',

			targetEntityName: 'Template',
			targetEntityFieldName: 'children',

			onDelete: 'Cascade',
		},
	},
});
