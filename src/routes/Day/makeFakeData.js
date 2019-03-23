export const makeFakeData = () => {
	let x = [];
	for (let i = 0; i <= 23; i++) {
		const dataObj = {
			amount: {
				value: Math.floor(Math.random() * 10)
			},
			counterparty_alias: {
				avatar: {
					uuid: Math.random() * 100
				}
			},
			alias: {
				display_name: Math.floor(Math.random() * 10)
			},
			updated: i
		};
		x.push(dataObj);
	}
	// console.log(fakedata);
	return x;
};
export const makeDataValue = () => {
	let y = [];
	for (let i = 0; i <= 23; i++) {
		const dataObj = {
			name: i,
			value: Math.floor(Math.random() * 10)
		};
		y.push(dataObj);
	}
	return y;
};
