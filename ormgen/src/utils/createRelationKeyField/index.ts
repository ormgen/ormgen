import { Entity, Entity$, EntityField, EntityFieldType } from '~/modelling';

interface Config {
	field: EntityFieldType.Relation;
	targetEntity: Entity | Entity$;
}

export function createRelationKeyField(config: Config): EntityField {
	return {
		type: 'text',
	};
}
