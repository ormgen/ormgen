import { Entity__Input, Entity, EntityFieldType } from '~/modelling';

interface Config {
	field: EntityFieldType.Relation;
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
