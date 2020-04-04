// pure function
const add = (a, b) => a + b;
const sum = add(3, 6);

console.log(sum);

// side effects
let total = 5;

const multiply = (a, b) => {
	const newTotal = a * b;
	total = newTotal;
	return newTotal;
};

const newNum = multiply(2, 7);

console.log(total);
console.log(newNum);
