#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { init } from './index.init';

const { argv } = yargs(hideBin(process.argv));

const { _ } = argv as any;
const [command] = _;

if (command === 'init') {
	init();
} else {
	throw new Error(`Invalid command: ${command}`);
}
