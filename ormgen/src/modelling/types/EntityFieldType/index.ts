import { EntityFieldType__Input } from '../EntityFieldType__Input';
import { Entity__Input } from '../Entity__Input';
import { CreateType } from './index.create';

export namespace EntityFieldType {
	export type Text = CreateType<EntityFieldType__Input.Text>;

	export type Int = CreateType<EntityFieldType__Input.Int>;

	export type Boolean = CreateType<EntityFieldType__Input.Boolean>;

	export type DateTime = CreateType<EntityFieldType__Input.DateTime>;

	export type Enum = CreateType<EntityFieldType__Input.Enum>;

	export type Json = CreateType<EntityFieldType__Input.Json>;

	export type Vector = CreateType<EntityFieldType__Input.Vector>;

	export type Relation = CreateType<EntityFieldType__Input.Relation, { $targetEntity: Entity__Input }>;

	export type RelationTarget = CreateType<
		EntityFieldType__Input.RelationTarget,
		{
			$sourceEntity: Entity__Input;
			$sourceEntityField: EntityFieldType__Input.Relation;
		}
	>;

	export type ID = Text | Int;

	export type Primitive = Text | Int | Boolean | DateTime | Enum | Json | Vector;

	export type Any = Primitive | Relation | RelationTarget;
}
