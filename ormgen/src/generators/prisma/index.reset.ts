import { configStore } from '~/internals';
import { getPrismaClient } from './index.instance';

export async function resetTables() {
	const { excludedTables = [] } = configStore.instance?.seed || {};

	const prismaClient = await getPrismaClient();

	const keys = Object.keys(prismaClient);

	const models = keys
		.map((key) => prismaClient[key])
		.filter(Boolean)
		.filter((obj) => obj.deleteMany)
		.filter((model) => !excludedTables.includes(model.name));

	for (const model of models) {
		await model.deleteMany({});
	}
}
