/*
A2.1
Make an application that takes your birth year as an argument and prints out how many years old you are (assuming you already didn’t have your birthday this year)
For example:
$ node age.js 1989
You will be 30 years old this year!
See: https://nodejs.org/en/knowledge/javascript-conventions/what-is-the-arguments-object/
*/
const calculateAge = (dob) => { 
	const date = new Date(dob);
	const diff_ms = Date.now() - date.getTime();
	const age_dt = new Date(diff_ms); 
	const result = Math.abs(age_dt.getUTCFullYear() - 1975);
	const affix = (result > 44) ? 'you old bastard' : ''; 
	return `You will be ${result} this year ${affix}` ;
}

//console.log(calculateAge(1975));
/*
A2.2
Do a program that calculates the area of a square by your input. The mathematical formula for square area is A=s2A=s^2A=s2
For example:
$ node square.js 5
A square with sides of length 5m is 25 square meters in area.
*/

const areaOfSquare = (input) => { 
	const result = input * input;
	return `A square with sides of length ${input}m is ${result} square meters in area.`;
}
//console.log(areaOfSquare(5));

/*
A2.3
Do a program that tells you if a number is even or odd. Use the modulo operator %
For example:
$ node oddoreven.js 5
Your number is odd!
$ node oddoreven.js 8
Your number is even!
*/

const oddOrEven = (input) => {
	if (input % 2 === 0) {
		return "Your number is even!";
	}
	return "Your number is odd!";
}
//console.log(oddOrEven(2));
//console.log(oddOrEven(3));

/*
A2.4
Make an application that prints the price of admission to a swimming pool. The application should take in birth year and if you are a student in as arguments. Create if expressions that check if you are eligible for a discount. The pricing table currently looks like this:

Adults
3.80€

Children 0-16
2.40€

Seniors 65+
2.40€

Students
2.40€

For example:
$ node swimmingpool.js 1994 student
Your price of admission is 2.40€
$ node swimmingpool.js 1996
Your price of admission is 3.80€
*/

const getAge = (birthDateString) => {
	var today = new Date();
	var birthDate = new Date(birthDateString);
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
	}
	return age;
}

const swimmingPoolAdmission = (...admission) => {
	const age = getAge(admission[0]);

	if (admission[1] !== undefined) {
		if (admission[1].toLowerCase() == 'student') {
			//const group = getAge(admission[1]);
			return "Your price of admission is 2.40€";
		}			
	}

	if(age <= 16 || age >= 65) {
		return "Your price of admission is 2.40€";
	}
	
	return "Your price of admission is 3.80€";
}

console.log(swimmingPoolAdmission(1985, 'Student'));

/*
A2.5
Do a program that calculates the area of a circle based on your radius input. The mathematical formula for area of a circle is A=πr2A=\pi r^2A=πr2 . You can access π\piπ by using the variable Math.PI.
*/

const calculateAreaOfCircle = (radius) => {
  return (radius * radius * Math.PI);
}

console.log( 'Area of your circle is', calculateAreaOfCircle(25) );

/*
A2.6
Do a program that calculates the area of the following structure
*/

const areaOfStructure = (base) => {
	const hypotenuse = Math.hypot(base, base);
	const equalSidesTotal = base * 4; 
	return equalSidesTotal + hypotenuse;
};

console.log(areaOfStructure(2));
