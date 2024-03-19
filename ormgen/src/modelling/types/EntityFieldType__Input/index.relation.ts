export interface RelationType {
	type: 'relation';

	isUnique?: boolean;
	isNullable?: boolean;

	defaultValue?: undefined;

	onDelete: 'Cascade' | 'SetNull' | 'Restrict';

	/**
	 * Some ORM's gives the relations names in order to match them between entities.
	 */
	relationName?: string;

	/**
	 * The name of the entity you want connect with.
	 */
	targetEntityName: string;

	/**
	 * The name of the the source entity field in the target entity.
	 */
	targetEntityFieldName: string;

	/**
	 * How many of the target model can this model connect to?
	 * One or many?
	 *
	 * Defaults to 'many'
	 */
	targetMode?: 'one' | 'many';
}

export interface RelationTargetType {
	type: 'relationTarget';

	isUnique?: undefined;
	isNullable?: undefined;

	defaultValue?: undefined;

	sourceEntityName: string;
}
