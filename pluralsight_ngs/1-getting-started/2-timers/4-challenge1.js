const theOneFunc = (s) => {
	console.log(`Hello after ${s} seconds`)
};


// Hello after 4 seconds
setTimeout(theOneFunc, 4 * 1000, 4);

// Hello after 8 seconds
setTimeout(theOneFunc, 8 * 1000, 8);

// You can define only ONE function