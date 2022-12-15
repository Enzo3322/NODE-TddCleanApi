const returnRandomPositionOfArray = (arr: any[]) => {
	return arr[Math.floor(Math.random() * arr.length)];
}

const filterArrayByProperty = (arr, property, value) => {
	return arr.filter((item) => item[property] === value);
}