import { camelCase } from 'case-anything';
import { Entity__Input, Entity, EntityField } from '~/modelling';
import { createRelationTargetFieldName } from '../createRelationTargetFieldName';

interface Config {
	field: EntityField.Relation;
	targetEntity: Entity__Input | Entity;
}

export function createRelationKeyFieldName(config: Config) {
	const { field, targetEntity } = config;

	if (field.sourceEntityKeyFieldName) {
		return field.sourceEntityKeyFieldName;
	}

	const targetEntityName = targetEntity.name;
	const targetFieldName = createRelationTargetFieldName(config);

	return camelCase(targetEntityName + '-' + targetFieldName);
}
