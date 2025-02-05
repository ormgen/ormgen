import { getPrismaClient } from './index.instance';

export async function resetAllTables() {
	const prismaClient = await getPrismaClient();

	const keys = Object.keys(prismaClient);

	for (const key of keys) {
		const model = prismaClient[key];

		if (model?.deleteMany) {
			await model.deleteMany({});
		}
	}
}
