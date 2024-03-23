import { execSync } from 'child_process';

export function runPrettierSync(filePath: string) {
	return execSync(`npx prettier --write "${filePath}" --with-node-modules --log-level warn`, { stdio: 'inherit' });
}
