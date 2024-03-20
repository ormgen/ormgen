import { flattenArrayable } from '~/helpers';
import { store } from '~/internals';
import { EntityField__Input, Entity__Input } from '~/modelling';

interface EntityTargetResult {
	targettingEntityInput: Entity__Input;

	targettingFieldName: string;
	targettingField: EntityField__Input.Relation;
}

export function findTargettingEntities(sourceEntityName: string): EntityTargetResult[] {
	const entityInputs = store.getEntityInputs();

	const targettingEntities = entityInputs.map((targettingEntityInput) => {
		const fields = flattenArrayable(targettingEntityInput.fields);

		const fieldNames = Object.keys(fields);

		const targettingFieldName = fieldNames.find((fieldName) => {
			const field = fields[fieldName];

			if (field.type === 'relation') {
				return field.targetEntityName === sourceEntityName;
			}
		});

		const targettingField = fields[targettingFieldName || ''];

		return { targettingEntityInput, targettingFieldName, targettingField };
	});

	return targettingEntities.filter((result) => {
		return !!result.targettingField;
	}) as EntityTargetResult[];
}
