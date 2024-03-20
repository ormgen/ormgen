import { PrismaGenerator, ZodGenerator, createInstance } from 'ormgen';

const instance = createInstance({
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

if (process.argv.includes('--sync')) {
	instance.sync();
}

if (process.argv.includes('--seed')) {
	instance.seed();
}
