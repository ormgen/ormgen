import { Entity__Input, Entity, EntityField } from '~/modelling';
import { getPrimaryFieldType } from '../getPrimaryFieldType';

interface Config {
	fieldName: string;
	field: EntityField.Relation;
	targetEntity: Entity__Input | Entity;
}

// Messy implementation due to TS messup
export function createRelationKeyField(config: Config) {
	const { fieldName, field } = config;
	const { $entityInput, $targetEntityInput, isNullable } = field;

	const base: EntityField.ID = {
		type: 'text',
		$input: null,
		$name: fieldName,
		$entityInput,
	};

	const type = getPrimaryFieldType($targetEntityInput);

	return { ...base, type, isNullable } as EntityField.ID;
}
