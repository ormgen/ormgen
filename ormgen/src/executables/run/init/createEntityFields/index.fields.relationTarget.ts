import { EntityFields, Entity__Input } from '~/modelling';
import { findTargettingEntities } from '~/utils';

export function addRelationTargetFields(entityFields: EntityFields, entityInput: Entity__Input) {
	const results = findTargettingEntities(entityInput.name);

	results.forEach((result) => {
		const { targettingEntityInput, targettingField, targettingFieldName } = result;

		entityFields[targettingField.targetEntityFieldName] = {
			$input: null,

			$name: targettingFieldName,

			type: 'relationTarget',

			sourceEntityName: targettingEntityInput.name,

			$entityInput: entityInput,

			$sourceEntity: targettingEntityInput,

			$sourceEntityField: targettingField,
		};
	});
}
