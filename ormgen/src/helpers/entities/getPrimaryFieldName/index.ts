import { flattenArrayable } from '~/helpers/utils';
import { Entity, Entity__Input } from '~/modelling';

interface Config {
	entity: Entity__Input | Entity;
	errorMessage: string | undefined;
}

export function getPrimaryFieldName(config: Config) {
	const { entity, errorMessage = `Primary field not found for entity: ${entity.name}` } = config;

	if (entity.id) {
		return entity.id;
	}

	const fields = flattenArrayable(entity.fields);
	const fieldEntries = Object.entries(fields);

	const primaryFieldEntry = fieldEntries.find(([name, field]) => {
		return field.isPrimary;
	});

	if (primaryFieldEntry) {
		const [name, field] = primaryFieldEntry;

		if ('$name' in field) {
			return field.$name as string;
		}

		return name;
	}

	throw new Error(errorMessage);
}
