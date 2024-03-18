import { Entity, Entity$, EntityFieldType } from '~/modelling';
import { getEntityId } from '../getEntityId';

interface Config {
	field: EntityFieldType.Relation;
	targetEntity: Entity | Entity$;
}

export function createRelationTargetFieldName(config: Config) {
	const { field, targetEntity } = config;

	const targetEntityId = getEntityId(targetEntity);

	if (!targetEntityId) {
		throw new Error(`Target entity (${field.targetEntityName}) requires a primary field`);
	}

	return field.targetEntityFieldName || targetEntityId;
}
