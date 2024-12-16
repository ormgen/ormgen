export interface EntityIndex {
	name: string;
	fields: string[];
	variant: 'id' | 'unique' | 'index';
	type?: 'BTree' | 'Hash' | 'Gin' | 'Gist' | 'SpGist' | 'Brin';
}
