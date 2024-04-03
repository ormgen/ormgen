import { execSync } from 'child_process';
import { configStore } from '~/internals/configStore';

export function runFormatSync(filePath: string) {
	const { prettier = true, command } = configStore.instance?.formatter || {};

	if (command) {
		const cmd = command(filePath);

		if (cmd) {
			return execSync(cmd, { stdio: 'inherit' });
		}
	}

	if (prettier) {
		return execSync(`npx prettier --write --with-node-modules --log-level warn "${filePath}"`, { stdio: 'inherit' });
	}
}
