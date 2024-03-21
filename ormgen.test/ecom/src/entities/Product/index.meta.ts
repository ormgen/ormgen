import { z } from 'zod';

export const meta = {
	attributes: z.union([
		// <>
		z.object({ material: z.string() }),
		z.object({ resolution: z.number() }),
	]),
};

type MetaType = typeof meta;

export interface Meta {
	attributes: z.infer<MetaType['attributes']>;
}
