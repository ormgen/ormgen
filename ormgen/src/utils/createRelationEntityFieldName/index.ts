import { camelCase } from 'case-anything';
import { Entity$, EntityFieldType } from '~/modelling';
import { createRelationTargetFieldName } from '../createRelationTargetFieldName';

export function createRelationEntityFieldName(field: EntityFieldType.Relation, targetEntity$: Entity$) {
	const targetFieldName = createRelationTargetFieldName(field, targetEntity$);

	return camelCase(targetEntity$.source.name + '-' + targetFieldName);
}
