import { EntityFields, Entity__Input } from '~/modelling';

export function addIdField(entityFields: EntityFields, entityInput: Entity__Input) {
	const { id } = entityInput;

	const base = {
		$input: null,
		$entityInput: entityInput,

		isID: true,
	};

	switch (id) {
		case 'alias':
			entityFields.alias = { ...base, $name: 'alias', type: 'text' };
		case 'id':
			entityFields.id = { ...base, $name: 'id', type: 'text' };
		case 'uid':
			entityFields.uid = { ...base, $name: 'uid', type: 'text' };
	}
}
