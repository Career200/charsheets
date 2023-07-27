export type SaveMap = Record<string, SpaceMap>;
export type SpaceMap = Record<string, string>;

export function generateId(): string {
	const alphanumeric =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	let id = '';
	for (let i = 0; i < 8; i++) {
		id += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
	}
	return id;
}

export async function getMap(space = 'CP2020') {
	const map: SaveMap = await JSON.parse(
		localStorage.getItem('d1ceSaveMap') || `{"${space}": {}}`
	);
	return map[space];
}

export async function saveData(
	obj: any,
	id: string,
	name: string,
	space = 'CP2020'
) {
	localStorage.setItem(id, JSON.stringify(obj));

	const map: SaveMap = await JSON.parse(
		localStorage.getItem('d1ceSaveMap') || '{"CP2020":{}}'
	);
	map[space][id] = name;
	localStorage.setItem('d1ceSaveMap', JSON.stringify(map));
}

export function getId(map: SpaceMap, name: string): string | undefined {
	const id = Object.keys(map).find((key) => map[key] === name);
	return id;
}

export const getData = async (id: string) =>
	await JSON.parse(localStorage.getItem(id) || '{}');
