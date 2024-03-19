import { Entity__Input, Enum } from '~/modelling';

export interface PrismaConfig {
	schemaPath?: string;

	datasource: {
		provider: string;
		url: string;
		extensions?: string[];
		extra?: string;
	};

	clientGenerator?: {
		name?: string;
		provider?: string;
		binaryTargets?: string[];
		previewFeatures?: string[];
		extra?: string;
	};

	extra?: string;

	hooks?: {
		Enum?: {
			pre?(e: Enum): Enum;
			post?(e: Enum): string;
		};
		Entity?: {
			pre?(entity: Entity__Input): Entity__Input;
			post?(entity: Entity__Input): string;
		};
	};
}
