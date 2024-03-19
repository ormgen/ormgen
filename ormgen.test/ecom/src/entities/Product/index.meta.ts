import { z } from 'zod';

export const attributes = z.union([
	// <>
	z.object({ material: z.string() }),
	z.object({ resolution: z.number() }),
]);
