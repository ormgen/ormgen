import { EntityFields__Input, mixins } from 'ormgen';

export function timestamps(): EntityFields__Input {
	return {
		createdAt: mixins.$createdAtField(),
		updatedAt: mixins.$createdAtField(),
	};
}
