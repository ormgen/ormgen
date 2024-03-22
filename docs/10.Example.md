# Example

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
