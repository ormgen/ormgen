import { EntityFields, Entity__Input } from '~/modelling';

export function addIdField(entityFields: EntityFields, entityInput: Entity__Input) {
	const { id } = entityInput;

	const base = {
		$input: null,
		$entityInput: entityInput,

		isID: true,
	};

	if (id === 'id') {
		entityFields.id = { ...base, $name: 'id', type: 'int', isPrimary: true };
	} else if (id === 'uid') {
		entityFields.uid = { ...base, $name: 'uid', type: 'text', isPrimary: true };
	} else if (id === 'alias') {
		entityFields.alias = { ...base, $name: 'alias', type: 'text', isPrimary: true };
	}
}
