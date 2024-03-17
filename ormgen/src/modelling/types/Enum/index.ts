export interface Enum {
	name: string;
	namePlural?: string;

	values: string[];

	skipDatabase?: boolean;

	extra?: Record<string, unknown>;
}
