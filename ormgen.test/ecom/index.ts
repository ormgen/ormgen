import { run } from 'ormgen';

run({
	search: {
		root: 'ecom',
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
