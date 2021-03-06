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

// impure functions
const addRandom = (a, b) => a + b + Math.random();

let division = 4;
const divide = (a, b) => {
	const newDivision = a / b;
	division = newDivision;
	return newDivision;
};

const newAddition = addRandom(2, 8);
const anotherDivision = divide(3, 9);

console.log(newAddition);
console.log(division);
console.log(anotherDivision);

// factory functions
const taxFactory = (tax) => {
	const calculateTaxTotal = (amount) => amount * tax;
	return calculateTaxTotal;
};

const taxCalculator = taxFactory(0.2);
const vatCalculator = taxFactory(0.15);

console.log(taxCalculator(200));
console.log(vatCalculator(370));

// iife
(function () {
	var name = 'Adam';
	var age = '27';
	var hobbies = ['reading', 'coding', 'cooking', 'gaming'];

	return {
		name,
		age,
	};
})();

console.log(name);
console.log(age);
console.log(hobbies);

// recursion
const powerOf = (n, x) => {
	if (x === 1) {
		return x;
	}

	return x * powerOf(n, x - 1);
};

const twoToPowerOfThree = powerOf(2, 3);
console.log(twoToPowerOfThree);

const myFriends = {
	name: 'Adam',
	friends: [
		{
			name: 'Fayzal',
			friends: [
				{
					name: 'Pooles',
				},
			],
		},
		{
			name: 'Matt',
			friends: [
				{
					name: 'Grit',
				},
			],
		},
		{
			name: 'Andrew',
			friends: [
				{
					name: 'Rad',
				},
			],
		},
	],
};

const getFriends = (person) => {
	const namesList = [];

	if (!person.friends) {
		return [];
	}

	for (const friend of person.friends) {
		namesList.push(friend.name);
		namesList.push(...getFriends(friend));
	}

	return namesList;
};

console.log(getFriends(myFriends));
