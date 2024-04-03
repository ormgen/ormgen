import { PrismaGeneratorConfig, ZodGeneratorConfig, TypesGeneratorConfig } from '~/generators';
import { InstanceConfig } from '~/instance';

export const configStore = {
	instance: null as InstanceConfig | null,
	zod: null as ZodGeneratorConfig | null,
	prisma: null as PrismaGeneratorConfig | null,
	types: null as TypesGeneratorConfig | null,
};
