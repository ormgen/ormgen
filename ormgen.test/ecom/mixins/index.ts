import { EntityFields, mixins } from 'ormgen';

export function timestamps(): EntityFields {
	return {
		createdAt: mixins.$createdAtField(),
		updatedAt: mixins.$createdAtField(),
	};
}
