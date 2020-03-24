/*
H2.1
Create a program that takes in three numbers, number_1, number_2 and number_3. Decide their values freely. Find the
a) largest one
b) smallest one
and console.log() its name and value.
*/
console.log("\n-- Exercise H2.1 --------------------\n");

// the program
(
	() => console.log(
		`The max value of ${number_1}, ${number_2} and ${number_3} is ${Math.max(number_1, number_2, number_3)} and the min value is ${Math.min(number_1, number_2, number_3)} `
	)
)(number_1 = 1, number_2 = 2, number_3 = 3);

/*
H2.2
Write a program that tests if a variable has been declared. Print the result.
*/
console.log("\n-- Exercise H2.2 --------------------\n");

const aVariable = 123;

const isDeclared = (variable) => {
	try{
		variable;
	}
	catch(err) {
		console.log(err, 'Some other error.');
		if(err.name === 'ReferenceError') {
			console.log('var is undeclared');
			return;
		}
		console.log(err, 'Some other error.');
	}
}
isDeclared(aVariable);
//isDeclared(undeclared);

/*
H2.3
Write a program that calculates a square root of number, and...
a) if number is negative, prints out an error message.
b) (Extra) if number is negative, calculates the complex square root.
*/
console.log("\n-- Exercise H2.3 --------------------\n");

// the program
const calcSquareRoot = (number) => 
{
	const result = Math.sqrt(number);	

	if (number < 0) {
		console.log(`Error: ${number} is not a number greater than zero.`);
		return;
	}		
	console.log(result);
};

calcSquareRoot(5);
calcSquareRoot(-5);

/*
H2.4
Create a program that returns all the solutions for the quadratic equation ax2+bx+c=0ax^2 + bx + c = 0ax2+bx+c=0.
Give the parameters a, b and c as arguments for the program and return the roots that you get from the formula
x=−b±b2−4ac2ax = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}x=2a−b±b2−4ac​​.
Remember to take into account that b2−4acb^2 - 4acb2−4ac can have a negative value!
*/
console.log("\n-- Exercise H2.4 --------------------\n");

// quadratic equation solver
(
	() => {
		var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
		var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
		console.log(result + "\n" + result2);	
	}
)(a = 1, b = 1,c = -1);