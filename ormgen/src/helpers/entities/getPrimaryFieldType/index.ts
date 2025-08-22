import { Entity, EntityFieldType, Entity__Input } from '~/modelling';
import { flattenArrayable } from '../../utils/flattenArrayable';

interface Config {
	entity: Entity__Input | Entity;
	errorMessage: string | undefined;
}

export function getPrimaryFieldType(config: Config): EntityFieldType.ID {
	const { entity, errorMessage = `Primary field not found for entity: ${entity.name}` } = config;

	switch (entity.id) {
		case 'id':
			return 'int';
		case 'uid':
			return 'text';
		case 'alias':
			return 'text';
	}

	const fields = flattenArrayable(entity.fields);
	const fieldItems = Object.values(fields);

	const primaryField = fieldItems.find((field) => {
		return field.isPrimary;
	});

	if (!primaryField) {
		throw new Error(errorMessage);
	}

	return primaryField.type as EntityFieldType.ID;
}
