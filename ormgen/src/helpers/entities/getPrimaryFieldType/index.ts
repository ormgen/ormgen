import { EntityFieldType, Entity__Input } from '~/modelling';
import { flattenArrayable } from '../../utils/flattenArrayable';

export function getPrimaryFieldType(entityInput: Entity__Input): EntityFieldType.ID {
	switch (entityInput.id) {
		case 'id':
			return 'int';
		case 'uid':
			return 'text';
		case 'alias':
			return 'text';
	}

	const fields = flattenArrayable(entityInput.fields);
	const fieldItems = Object.values(fields);

	const primaryField = fieldItems.find((field) => {
		return field.isPrimary;
	});

	if (!primaryField) {
		throw new Error(`Primary field not found for entity: ${entityInput.name}`);
	}

	return primaryField.type as EntityFieldType.ID;
}
