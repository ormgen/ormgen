import { Entity } from '~/modelling';

export function createSeedPartials(entity: Entity) {
	const fieldItems = Object.values(entity.fields);

	const itemsWithDefaults = fieldItems.filter((field) => {
		return field.defaultValue !== undefined;
	});

	const itemNamesWithDefault = itemsWithDefaults.map((field) => {
		return field.$name;
	});

	const partials = itemNamesWithDefault.reduce((acc, item) => {
		return Object.assign({}, acc, { [item]: true });
	}, {});

	return `.partial(${JSON.stringify(partials)})`;
}
