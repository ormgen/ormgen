export interface Enum {
	name: string;

	values: string[];

	skipDatabase?: boolean;

	extra?: Record<string, unknown>;
}
