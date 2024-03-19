import { store } from '~/internals';
import { EntityField, EntityField__Input, Entity__Input } from '~/modelling';

export function createEntityField(fieldName: string, fieldInput: EntityField__Input, entityInput: Entity__Input): EntityField {
	function $getEntityInput() {
		return entityInput;
	}

	if (fieldInput.type === 'relation') {
		return {
			...fieldInput,

			$input: fieldInput,
			$name: fieldName,

			$getEntityInput,

			$getTargetEntity() {
				return store.getEntityInput(fieldInput.targetEntityName);
			},
		};
	}

	return {
		...fieldInput,

		$input: fieldInput,
		$name: fieldName,

		$getEntityInput,
	} as EntityField;
}
