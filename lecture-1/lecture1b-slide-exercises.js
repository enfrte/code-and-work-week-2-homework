
console.log("\n-- Exercise 1 --------------------\n");

let n = 5;
let sum = 0;
for(let i = 1; i <= n; i++) {	
	sum = sum + i;
	console.log(sum);
}

console.log("\n-- Exercise 2 --------------------\n");

n = 17;
sum = 0;
for(let i = 1; i <= n; i++) {	
	sum = sum + i;
	if (sum % 3 === 0 || sum % 5 === 0) {
		console.log(sum);		
	}
}

console.log("\n-- Exercise 3 --------------------\n");

for(let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(i, 'FizzBuzz');
	} else if (i % 3 === 0) {
		console.log(i, 'Fizz');
	} else if (i % 5 === 0) {
		console.log(i, 'Buzz');
	}
}

console.log("\n-- Exercise 4 --------------------\n");

// Write a program that calculates the factorial n! of a given number n.
n = 5;
let fra = 1;
for(let i = 1; i <= n; i++) {	
	fra = fra * i;
	console.log(fra);
}

console.log("\n-- Exercise 5 --------------------\n");

n = 4;
let amp = '';
for(let i = 1; i <= n; i++) {	
	amp = amp + '&';
	console.log(amp);
}

console.log("\n-- Exercise 6 --------------------\n");

n = 4;
amp = '';

for(let i = 1; i <= n; i++) { 
	amp = (amp.length === 0) ? amp + '&' : amp + '&&';
	let spaces = n - i;
	let output = amp.padStart(spaces + amp.length);
	console.log(output);
}