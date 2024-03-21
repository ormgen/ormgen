import { OrmGenerator } from '../index.template';

export function typesGenerator(): OrmGenerator {
	return {
		sync: {
			onEnums(enums) {},

			onEntities(entities) {},

			onWrite() {},
		},
	};
}
