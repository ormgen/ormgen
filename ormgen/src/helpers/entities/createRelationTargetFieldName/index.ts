import { Entity__Input, Entity, EntityField } from '~/modelling';
import { getPrimaryFieldName } from '../getPrimaryFieldName';

interface Config {
	field: EntityField.Relation;
	targetEntity: Entity__Input | Entity;
}

export function createRelationTargetFieldName(config: Config) {
	const { field, targetEntity } = config;

	return getPrimaryFieldName({
		entity: targetEntity,
		errorMessage: `Target entity (${field.targetEntityName}) requires a primary field`,
	});
}
