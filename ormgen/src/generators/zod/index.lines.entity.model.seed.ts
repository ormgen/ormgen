import { Entity } from '~/modelling';

export function createSeedPartials(entity: Entity) {
	const fieldItems = Object.values(entity.fields);

	const optionalItems = fieldItems.filter((field) => {
		if (field.type === 'relation' || field.type === 'relationTarget') {
			return false;
		}

		if (field.type === 'datetime') {
			return field.defaultNow ? true : false;
		}

		if (field.isNullable) {
			return true;
		}

		return field.defaultValue !== undefined;
	});

	const optionalItemNames = optionalItems.map((field) => {
		return field.$name;
	});

	const partials = optionalItemNames.reduce((acc, item) => {
		return Object.assign({}, acc, { [item]: true });
	}, {});

	return `.partial(${JSON.stringify(partials)})`;
}
