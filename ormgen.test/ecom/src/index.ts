import { typesGenerator, prismaGenerator, zodGenerator, createInstance } from 'ormgen';

const instance = createInstance({
	search: {
		root: 'ecom/src',
	},

	generators: [
		typesGenerator({
			customTypes: {
				datetime: 'string',
			},
		}),
		prismaGenerator({
			schemaPath: 'ecom/output/prisma/schema.prisma',

			datasource: {
				provider: '"postgresql"',
				url: 'env("DATABASE_URL")',
			},
		}),
		zodGenerator({
			filePath: 'ecom/output/zod/index.ts',
		}),
	],
});

if (process.argv.includes('--sync')) {
	instance.sync();
}

if (process.argv.includes('--seed')) {
	instance.seed();
}
