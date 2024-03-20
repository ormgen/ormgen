import { Entity__Input, Entity, EntityField } from '~/modelling';

interface Config {
	field: EntityField.Relation;
	targetEntity: Entity__Input | Entity;
}

export function createRelationTargetFieldName(config: Config) {
	const { field, targetEntity } = config;

	const targetEntityId = targetEntity.id;

	if (!targetEntityId) {
		throw new Error(`Target entity (${field.targetEntityName}) requires a primary field`);
	}

	return targetEntityId;
}
