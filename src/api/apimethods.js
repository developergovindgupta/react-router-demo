import data from '../json/getPaths.json';
export const getPaths = () => {
	// let url = '../json/getPaths.json';
	// try {
	// 	let res = await fetch(url);
	// 	let data = await res.json();
	// 	console.log(data);
	// 	return data;
	// } catch (error) {
	// 	console.log(error);
	// }

	return data;
};
