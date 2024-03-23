import { Seed } from '~/modelling';

function createPrismaModelName(entityName: string) {
	const [first, ...rest] = entityName.split('');

	return first.toLowerCase() + rest.join('');
}

async function getPrismaClient() {
	const { PrismaClient } = await import('@prisma/client');

	return new PrismaClient();
}

function runSeed({ seed }: Seed) {
	if (typeof seed === 'function') {
		return seed();
	}

	return seed;
}

export async function seedEntity(seed: Seed) {
	const prismaClient = await getPrismaClient();
	const prismaEntityName = createPrismaModelName(seed.name);

	const data = await runSeed(seed);

	if (data) {
		await prismaClient[prismaEntityName].createMany({ data });
	}
}
