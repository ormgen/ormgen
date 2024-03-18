import { run, PrismaGenerator } from 'ormgen';

run({
	search: {
		root: 'ecom/src',
	},

	generators: [
		new PrismaGenerator({
			schemaPath: 'ecom/prisma/schema.prisma',

			datasource: {
				provider: '"postgresql"',
				url: 'env("DATABASE_URL")',
			},
		}),
	],
});
