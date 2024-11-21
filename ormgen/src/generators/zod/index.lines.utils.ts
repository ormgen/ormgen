export function createUtilLines() {
	return [
		'// Extracts all zod types from a zod schema or object',
		'export type InferZodTypes<T> = T extends z.ZodTypeAny ? z.infer<T> : T extends Record<string, any> ? { [V in keyof T]: InferZodTypes<T[V]> } : T;',
	];
}
