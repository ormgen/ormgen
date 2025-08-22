import { Entity } from '~/modelling';

interface Config {
	targetEntity: Entity;
	errorMessage: string | undefined;
}

export function getPrimaryField(config: Config) {
	const { targetEntity } = config;
	const { fields } = targetEntity;

	const fieldItems = Object.values(fields);

	const primaryField = fieldItems.find((field) => {
		return field.isPrimary;
	});

	if (!primaryField) {
		throw new Error(`Primary field not found for entity: ${targetEntity.name}`);
	}

	return primaryField;
}
