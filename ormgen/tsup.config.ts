import { defineConfig } from 'tsup';
import fs from 'fs-extra';

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['esm', 'cjs'],
	splitting: false,
	sourcemap: true,
	clean: true,
	dts: true,

	async onSuccess() {
		const source = './dist';
		const dest = '../ormgen.test/node_modules/ormgen/dist';

		await fs.copy(source, dest);
	},
});
