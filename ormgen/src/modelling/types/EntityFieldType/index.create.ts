interface Base<Type, DefaultValue> {
	type: Type;

	isPrimary?: boolean;
	isNullable?: boolean;
	isUnique?: boolean;

	defaultValue?: DefaultValue;
}

interface Base__One<Type, DefaultValue> extends Base<Type, DefaultValue> {
	isArray?: false;
}

interface Base__Many<Type, DefaultValue> extends Base<Type, DefaultValue> {
	isArray: true;
}

type Merge<T1, T2> = T1 & T2;

export type CreateType<Type, DefaultValue, Extra = {}> = Merge<Base__One<Type, DefaultValue>, Extra> | Merge<Base__Many<Type, DefaultValue[]>, Extra>;
