import { EntityField__Input } from '../EntityField__Input';
import { Entity__Input } from '../Entity__Input';
import { CreateType } from './index.create';

export namespace EntityField {
	export type Text = CreateType<EntityField__Input.Text>;

	export type Int = CreateType<EntityField__Input.Int>;

	export type Boolean = CreateType<EntityField__Input.Boolean>;

	export type DateTime = CreateType<EntityField__Input.DateTime>;

	export type Enum = CreateType<EntityField__Input.Enum>;

	export type Json = CreateType<EntityField__Input.Json>;

	export type Vector = CreateType<EntityField__Input.Vector>;

	export type Relation = CreateType<EntityField__Input.Relation, { $targetEntity: Entity__Input }>;

	export type RelationTarget = CreateType<
		EntityField__Input.RelationTarget,
		{
			$sourceEntity: Entity__Input;
			$sourceEntityField: EntityField__Input.Relation;
		}
	>;

	export type ID = Text | Int;

	export type Primitive = Text | Int | Boolean | DateTime | Enum | Json | Vector;

	export type Any = Primitive | Relation | RelationTarget;
}

export type EntityField = EntityField.Any;

export type EntityFields = Record<string, EntityField>;
