console.log("\n-- Exercise 1 --------------------\n");

(() => console.log('Hello World!'))();

console.log("\n-- Exercise 2 --------------------\n");

let a = 2;
let b = 3;
// sum, difference, fraction and product of a and b
console.log(`The sum of a and b is ${a + b}`);
console.log(`The difference of a and b is ${a - b}`);
console.log(`The fraction of a and b is ${a / b}`);
console.log(`The product of a and b is ${a * b}`);
console.log(`The average of a and b is ${(a + b) / 2}`);

console.log("\n-- Exercise 3 --------------------\n");

function leapYear(year)
{
	if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
		console.log(`${year} is a leap year.`);
	}
	else {
		console.log(`${year} is a not leap year.`);
	}
}
console.log(leapYear(2020));

console.log("\n-- Exercise 4 --------------------\n");

const str1 = 'one', str2 = 'two';
const str_sum = str1 + str2;
console.log("str1 + str2 =", str_sum);
const str_sum_length = str_sum.length;
console.log("str1 + str2 length =", str_sum_length);
const str_avg = (str1.length + str2.length) / 2;
console.log("str1 + str2 length average =", str_avg);

if(str1.length < str_avg) {
	console.log("str1 is less than str_avg");
}
if(str2.length < str_avg) {
	console.log("str2 is less than str_avg");
}
if(str_sum_length < str_avg) {
	console.log("str_sum_length is less than str_avg");
}

console.log("\n-- Exercise 5 --------------------\n");

// a. 
const playerCount = 3;
if(playerCount !== 4){
	console.log("Hearts can only be played with 4 people.");
}

// b.
const isStressed = false;
const hasIceCream = true;
if(isStressed === false && hasIceCream === true){
	console.log("Mark is happy.");
}

// c.
const sunIsShhining = false;
const isNotRaining = true;
const temp = 23;
if(sunIsShhining === false && isNotRaining === true && temp > 20){
	console.log("It's a beach day.");
}

console.log("\n-- Exercise 6 --------------------\n");

const c = true;
const d = false;

if((c || d) && !(c && d)) {
	console.log("Is bitwise");
}
else {
	console.log("Is not bitwise");
}