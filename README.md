# Ormgen

-   Automatically solves 100% of the ORM generation problems in 95% of all projects.
-   Automatically solves 95% of 3% of all projects.
-   Gives 0% kcuf about the remaining 2%.

# At a glance

You define your entities in a file tree in the given format and typesafe functions. From this, ormgen can generate any file you wish, using our own generators or your custom one. You also get seeding capabilities out of the box.

Let's say you have the following file tree:

```
-   ...other folders in your project
-   database
    -   execute.ts
    -   entities
        -   User
            -   index.ts
            -   index.seed.ts
        -   Post
            -   index.ts
            -   index.seed.ts
    -   enums
        -   index.ts
    -   mixins
        -   index.ts
```

```ts
// entities/User/index.ts

import { createEntity } from 'ormgen';

export default createEntity({
	name: 'User',

    id: 'uid'

	fields: {
		id: { type: 'int' },
		name: { type: 'string'  },
		email: { type: 'string' },
	},
});
```

```ts
// entities/Post/index.ts

export default createEntity({
	name: 'Post',

	id: 'uid',

	fields: {
		title: { type: 'string' },
		content: { type: 'string' },

		user: {
			type: 'relation',

			targetEntityName: 'User',
			targetEntityFieldName: 'posts',
		},
	},
});
```

```ts
// execute.ts
const instance = createInstance({
	search: {
		root: 'ecom/src',
	},

	generators: [
		typesGenerator(),
		prismaGenerator({
			schemaPath: 'prisma/schema.prisma',

			datasource: {
				provider: '"postgresql"',
				url: 'env("DATABASE_URL")',
			},
		}),
		zodGenerator({
			filePath: 'zod/index.ts',
		}),
	],
});

if (process.argv.includes('--sync')) {
	instance.sync();
}
```

This will generate a prisma schema (at `prisma/schema.prisma`), zod schemas (at `zod/index.ts`) as well as typescript types for you (in `node_modules/@ormgen/__generated`).

# Background

Using e.g. Prisma and Zod, you often encountere some of the following problems:

-   Prisma does not support splitting files.
    -   There are solutions for this, but they are a bit clunky, and are after constructions.
-   Prisma uses it's own schema language.
    -   One could argue that it gives more freedom to define your entities in a programming language (i.e. TypeScript).
-   The solutions for generating zod types from Prisma leave some things to be desired.
    -   For instance, you might want two different schemas; one for creating entries (seed) and one of the fetched entries (read).
-   Prisma has a surprisingly hard way to create plugins or integrations.
-   Seeding in prisma is a pain.
-   Drizzle is a great tool and solves a few of these points, but I still need to repeat myself for each entity I create.

`Ormgen` allows you to define my entities in a file tree, and automatically generate everything you might need. It provides you with a few generators out of the box, but you can also create your own in a breeze.

# Concepts

## Entity

To be documented...

## Enum

To be documented...

## Seed

To be documented...

## Mixin

To be documented...

# Instance

## Sync

To be documented...

## Seed

To be documented...

# Generators

## Types

To be documented...

## Prisma

To be documented...

## Zod

To be documented...

## Drizzle

Not implemented yet.

## Custom generator

# Type safety

To be documented...

---

# Todo

-   [ ] Seed
    -   [ ] Prisma generator
-   [ ] Mixins
    -   [ ] Make available
-   [ ] Generate types for ormgen to use
    -   [ ] Make global mixins work
-   [ ] Documentation

## Future

-   [ ] Create an init command or function to get started easily
-   [ ] Provide some recipes for how to work with ormgen
    -   [ ] Single repo
    -   [ ] Monorepo
-   [ ] Generators
    -   [ ] Zod
        -   [ ] config.includeDefaultValues
    -   [ ] Drizzle
-   [ ] Add types
    -   [ ] BigInt
    -   [ ] Float
    -   [ ] Decimal
    -   [ ] Bytes
-   [ ] Refactor as a monorepo
-   [ ] Seed
    -   [ ] Take in data from previous seeds

```

```
