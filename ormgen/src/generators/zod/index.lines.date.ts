import { configStore } from '~/internals';

export function createDateSchemaLines() {
	const { dateMode = 'string' } = configStore.instance!;

	if (dateMode === 'date') {
		return ['export const datetimeSchema = z.coerce.date()'];
	}

	return ['export const datetimeSchema = z.coerce.date().transform((val) => val.toISOString())'];
}
