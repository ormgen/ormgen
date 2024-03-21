import { prismaGenerator, zodGenerator, createInstance } from 'ormgen';
import { typesGenerator } from '../../../ormgen/src/generators/types/index';

const instance = createInstance({
	search: {
		root: 'ecom/src',
	},

	generators: [
		typesGenerator(),
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
