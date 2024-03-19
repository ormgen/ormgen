import { EntityField, EntityField__Input, Entity__Input } from '~/modelling';
import { getEntityInput } from '~/utils';

export function createEntityField(fieldName: string, fieldInput: EntityField__Input, entityInput: Entity__Input): EntityField {
	function $getEntityInput() {
		return entityInput;
	}

	if (fieldInput.type === 'relation') {
		return {
			...fieldInput,

			$name: fieldName,

			$input: fieldInput,

			$getEntityInput,

			$getTargetEntity() {
				return getEntityInput.safe(fieldInput.targetEntityName);
			},
		};
	}

	return { ...fieldInput, $input: fieldInput, $getEntityInput } as EntityField;
}
