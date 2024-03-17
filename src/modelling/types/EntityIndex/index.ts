export interface EntityIndex {
	type: 'id' | 'unique';
	name: string;
	fields: string[];
}
