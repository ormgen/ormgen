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

			targetEntityName: 'Template',
			targetEntityFieldName: 'children',

			onDelete: 'Cascade',
		},
	},
});
