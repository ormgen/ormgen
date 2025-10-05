export interface EnumShape {
	name: string;

	values: string[];

	skipDatabase?: boolean;

	extra?: Record<string, unknown>;
}
