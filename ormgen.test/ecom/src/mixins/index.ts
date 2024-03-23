import { EntityFields__Input, defaultMixins } from 'ormgen';

export function timestamps(): EntityFields__Input {
	return {
		createdAt: defaultMixins.$createdAtField(),
		updatedAt: defaultMixins.$createdAtField(),
	};
}
