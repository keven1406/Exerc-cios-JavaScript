const array = ['Elias', 'Beti', 'Ana', 'Nina C�o']
console.log('O maior nome �: ', array.reduce((min, cur) => {
	if (min.length < cur.length) return min
	else return cur
}))
