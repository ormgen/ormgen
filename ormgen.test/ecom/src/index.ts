import { typesGenerator, prismaGenerator, zodGenerator, createInstance } from 'ormgen';

const instance = createInstance({
	search: {
		root: 'ecom/src',
	},

	generators: [
		typesGenerator({
			typesFilePath: 'ecom/types/index.ts',

			customTypes: {
				datetime: 'string',
			},
		}),
		prismaGenerator({
			schemaPath: 'ecom/prisma/schema.prisma',

			datasource: {
				provider: '"postgresql"',
				url: 'env("DATABASE_URL")',
			},
		}),
		zodGenerator({
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
