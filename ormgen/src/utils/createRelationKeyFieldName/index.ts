import { camelCase } from 'case-anything';
import { Entity__Input, Entity, EntityFieldType } from '~/modelling';
import { createRelationTargetFieldName } from '../createRelationTargetFieldName';

interface Config {
	field: EntityFieldType.Relation;
	targetEntity: Entity__Input | Entity;
}

export function createRelationKeyFieldName(config: Config) {
	const { targetEntity } = config;

	const targetEntityName = targetEntity.name;
	const targetFieldName = createRelationTargetFieldName(config);

	return camelCase(targetEntityName + '-' + targetFieldName);
}
