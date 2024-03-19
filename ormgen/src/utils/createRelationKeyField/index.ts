import { Entity__Input, Entity, EntityFieldType } from '~/modelling';

interface Config {
	fieldName: string;
	field: EntityFieldType.Relation;
	targetEntity: Entity__Input | Entity;
}

export function createRelationKeyField(config: Config): EntityFieldType.Text {
	const { fieldName, field } = config;

	return {
		$input: null,
		$name: fieldName,

		type: 'text',

		$getEntityInput: field.$getEntityInput,
	};
}
