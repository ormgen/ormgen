import { type PrismaClient } from '@prisma/client';

let prismaClient = null as any;

export async function getPrismaClient() {
	const { PrismaClient } = await import('@prisma/client');

	if (!prismaClient) {
		prismaClient = new PrismaClient();
	}

	return prismaClient as PrismaClient;
}
