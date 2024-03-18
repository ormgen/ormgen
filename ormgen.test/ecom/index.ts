import { run, PrismaGenerator } from 'ormgen';

run({
	search: {
		root: 'ecom',
	},

	generators: [
		new PrismaGenerator({
			datasource: {
				provider: '"postgresql"',
				url: 'env("DATABASE_URL")',
			},
		}),
	],
});
