import { run } from 'ormgen';

run({
	search: {
		root: 'test/ecom',
	},

	generators: [
		{
			onEnum(e) {
				console.log('enum', e.name);
			},
			onEntity(entity) {
				console.log('entity', entity.name);
			},
		},
	],
});
