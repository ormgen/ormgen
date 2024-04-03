import fs from 'fs-extra';
import { runFormatSync } from '~/helpers';

const files = [
	{
		path: 'entities/User/index.ts',
		content: `
			import { createEntity } from 'ormgen';

			export default createEntity({
				name: 'User',

				id: 'uid',

				fields: {
					name: {
						type: 'text',
					},

					age: {
						type: 'int',
					},

					role: {
						type: 'enum',
						enum: 'USER_ROLE_ALIAS'
					}
				}
			})
		`,
	},
	{
		path: 'entities/Post/index.ts',
		content: `
			import { createEntity } from 'ormgen';

			export default createEntity({
				name: 'Post',

				id: 'uid',

				fields: {
					title: {
						type: 'text',
					},

					content: {
						type: 'text',
					},

					user: {
						type: 'relation',

						targetEntityName: 'User',
						targetEntityFieldName: 'posts',

						onDelete: 'Cascade',
					}
				}
			})
		`,
	},
	{
		path: 'enums/index.ts',
		content: `
			import {createEnum} from 'ormgen';

			createEnum({
				name: 'USER_ROLE_ALIAS',

				values: {
					ADMIN: 'ADMIN',
					USER: 'USER',
				}
			})
		`,
	},
	{
		path: 'index.ts',
		content: `
			import { createInstance, typesGenerator, prismaGenerator } from 'ormgen'

			const instance = createInstance({
				search: {
					root: '.',
				},

				generators: [
					typesGenerator(),
					prismaGenerator({
						datasource: {
							provider: 'postgresql',
							url: 'env("DATABASE_URL")',
						}
					})
				]
			})

			instance.sync()
		`,
	},
];

export async function init() {
	for (const file of files) {
		await fs.ensureFile(file.path);
		await fs.writeFile(file.path, file.content);

		runFormatSync(file.path);
	}
}
