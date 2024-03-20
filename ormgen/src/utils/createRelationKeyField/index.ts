import { Entity__Input, Entity, EntityField } from '~/modelling';

interface Config {
	fieldName: string;
	field: EntityField.Relation;
	targetEntity: Entity__Input | Entity;
}

export function createRelationKeyField(config: Config): EntityField.Text {
	const { fieldName, field } = config;
	const { $entityInput } = field;

	return {
		$input: null,
		$name: fieldName,

		type: 'text',

		$entityInput,
	};
}
