import { store } from '~/internals';
import { EntityField, EntityField__Input, Entity__Input } from '~/modelling';

export function createEntityField(fieldName: string, fieldInput: EntityField__Input, entityInput: Entity__Input): EntityField {
	const $entityInput = entityInput;

	if (fieldInput.type === 'relation') {
		return {
			...fieldInput,

			$input: fieldInput,
			$name: fieldName,

			$entityInput,

			get $targetEntityInput() {
				return store.getEntityInput(fieldInput.targetEntityName);
			},
		};
	}

	return {
		...fieldInput,

		$input: fieldInput,
		$name: fieldName,

		$entityInput,
	} as EntityField;
}
