export const rollDice = (
	sides: number,
	amount: number,
	drop?: [number, boolean]
) => {
	const results: number[] = [];
	for (let i = 0; i < amount; i++) {
		const result = Math.floor(Math.random() * sides) + 1;
		results.push(result);
	}
	results.sort((a, b) => a - b);
	if (drop) {
		const [count, isHigher] = drop;
		isHigher && count !== 0 ? results.splice(-count) : results.splice(0, count);
	}
	const total = results.reduce((sum, value) => sum + value, 0);
	return { results, total };
};
