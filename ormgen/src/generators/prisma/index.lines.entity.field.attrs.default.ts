import { EntityField } from '~/modelling';

function createDefaultValueString(field: EntityField) {
	const { type, defaultValue } = field;

	if (field.$entityInput.idMeta?.autoIncrement) {
		return 'autoincrement()';
	}

	if (type === 'datetime') {
		if (field.defaultNow) {
			return 'now()';
		}
	}

	if (defaultValue === undefined) {
		return undefined;
	}

	const defaultValueString = JSON.stringify(defaultValue);

	if (type === 'enum') {
		return defaultValue;
	}

	if (type === 'json') {
		return JSON.stringify(defaultValueString);
	}

	return defaultValueString;
}

export function createDefaultAttr(field: EntityField) {
	const defaultValueString = createDefaultValueString(field);

	return defaultValueString && `@default(${defaultValueString})`;
}
