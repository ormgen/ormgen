import { run, PrismaGenerator, ZodGenerator } from 'ormgen';

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
		new ZodGenerator({
			filePath: 'ecom/zod/index.ts',
		}),
	],
});
