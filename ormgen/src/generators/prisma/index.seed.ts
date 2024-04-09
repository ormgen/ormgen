import { configStore } from '~/internals';
import { Seed } from '~/modelling';
import { getPrismaClient } from './index.instance';

function createPrismaModelName(entityName: string) {
	const [first, ...rest] = entityName.split('');

	return first.toLowerCase() + rest.join('');
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

	if (configStore.prisma?.seed?.onlyEmptyTables) {
		const count = await prismaClient[prismaEntityName].count();

		if (count > 0) {
			return;
		}
	}

	if (data) {
		await prismaClient[prismaEntityName].createMany({ data });
	}
}
