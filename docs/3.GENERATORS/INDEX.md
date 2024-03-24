# Generators

A generator is a way of

## Types

The `typesGenerator` generates typescript types. These are outputed in the `@ormgen/__generated` package within the `node_modules`.

The reason for this is that it allows us to create a typesafe environment for all other functions that ormgen exposes.

```ts
interface TypesGeneratorConfig {
	/**
	 * Ormgen tries to find the node_modules path automatically.
	 * But if it fails, you can define it on your own here.
	 */
	nodeModulesPath?: string;

	/**
	 * If you want to override any of the generated types, you can do it here.
	 * E.g. if you want to use `Date` instead of `string` for a `date` field.
	 */
	customTypes?: Record<string, string>;
}
```

## Prisma

The `prismaGenerator` generates a prisma schema. You can control most of the generation via the config.

```ts
interface PrismaGeneratorConfig {
	/**
	 * The path to the prisma schema file.
	 * Defaults to prisma/schema.prisma.
	 */
	schemaPath?: string;

	/**
	 * If you know prisma, you'll know what to do with this.
	 */
	datasource: {
		provider: string;
		url: string;
		extensions?: string[];
		extra?: string[]; // Any extra lines to put into the datasource field.
	};

	/**
	 * If you know prisma, you'll know what to do with this.
	 */
	clientGenerator?: {
		name?: string; // Defaults to "client"
		provider?: string; // Defaults to "prisma-client-js"
		binaryTargets?: string[]; // Defaults to []
		previewFeatures?: string[]; // Defaults to []
		extra?: string[]; // Any extra lines to put into the client generator field.
	};

	extra?: string; // Any extra lines to put into the schema.
}
```

## Zod

The `zodGenerator` generates zod schemas. This is currently pretty opinionated and doesn't have a lot of configuration options. Luckily, you can always create your generator with your own preferences.

```ts
interface ZodGeneratorConfig {
	/**
	 * The path to the zod schema file.
	 * Defaults to zod/index.ts.
	 */
	filePath?: string;

	/**
	 * If you for instance export your own zod package in a monorepo or whatever, this is where you define it.
	 *
	 * Defaults to "zod".
	 */
	zodPackage?: string;
}
```

## Drizzle

Not implemented yet.

## Custom generator

```ts
export interface OrmGenerator {
	name: string;

	sync?: {
		onStart?(): Promisable<any>; // When the sync starts

		onEnums?(enums: Enum[]): Promisable<any>; // Callback for all enums
		onEnum?(e: Enum, enums: Enum[]): Promisable<any>; // Callback for each enum

		onEntities?(entities: Entity[]): Promisable<any>; // Callback for all entities
		onEntity?(entity: Entity, entities: Entity[]): Promisable<any>; // Callback for each entity

		onMetaFile?(entityMetaFilePath: string, entity: Entity): Promisable<any>; // Callback for each entity meta file

		onWrite?(): Promisable<any>; // Write any files you want
		onComplete?(): Promisable<any>; // When the sync is done
	};

	seed?: {
		onStart?(): Promisable<any>; // When the seed starts

		onEntity?(seed: Seed): Promisable<any>; // Callback for each entity seed
	};
}
```
