export type PartialRecord<K extends string, T> = {
	[P in K]?: T;
};
