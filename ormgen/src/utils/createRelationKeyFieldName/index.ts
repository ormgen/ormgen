import { camelCase } from 'case-anything';
import { Entity, Entity$, EntityFieldType } from '~/modelling';
import { createRelationTargetFieldName } from '../createRelationTargetFieldName';
import { getEntityName } from '../getEntityName';

interface Config {
	field: EntityFieldType.Relation;
	targetEntity: Entity | Entity$;
}

export function createRelationKeyFieldName(config: Config) {
	const { targetEntity } = config;

	const targetEntityName = getEntityName(targetEntity);
	const targetFieldName = createRelationTargetFieldName(config);

	return camelCase(targetEntityName + '-' + targetFieldName);
}
