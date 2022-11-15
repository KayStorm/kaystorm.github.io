//Opening
console.log("Welcome! What is your name? ");
var userName = prompt("Welcome! What is your name? ");
console.log("Hello there, " + userName + "!");
console.log("Please enjoy using this calculator!");

console.log("I can do two sets of computations!");
console.log(
	"Option a: If you give me two numbers, I can add, subtract, multiple and divide them for you."
);
console.log(
	"Option b: If you give me a list of numbers I can help you find mean, median, and mode"
);

console.log("Please select which option you want to try by entering a or b: ");
let calChoice = prompt(
	"Please select which option you want to try by entering a or b: "
);

if (calChoice == "a") {
	var x = prompt("Enter a Value", "0");
	var y = prompt("Enter a Value", "0");
	var num1 = parseFloat(x);
	var num2 = parseFloat(y);

	//addition
	console.log("   ~~Addition~~");

	let additionMessageOne = "If you add ";
	let additionMessageTwo = x;
	let additionMessageThree = "by ";
	let additionMessageFour = y;
	let additionMessageFive = "the answer is: ";
	let additionAnswer = x + y;

	console.log(
		additionMessageOne,
		additionMessageTwo,
		additionMessageThree,
		additionMessageFour,
		additionMessageFive,
		additionAnswer
	);

	//subtraction
	console.log("   ~~Subtraction~~");

	let subtractionMessageOne = "If you subtract ";
	let subtractionMessageTwo = x;
	let subtractionMessageThree = "by ";
	let subtractionMessageFour = y;
	let subtractionMessageFive = "the answer is: ";
	let subtractionAnswer = x - y;

	console.log(
		subtractionMessageOne,
		subtractionMessageTwo,
		subtractionMessageThree,
		subtractionMessageFour,
		subtractionMessageFive,
		subtractionAnswer
	);

	let revsubtractionMessageOne = "If you subtract ";
	let revsubtractionMessageTwo = y;
	let revsubtractionMessageThree = "by ";
	let revsubtractionMessageFour = x;
	let revsubtractionMessageFive = "the answer is: ";
	let revsubtractionAnswer = y - x;

	console.log(
		revsubtractionMessageOne,
		revsubtractionMessageTwo,
		revsubtractionMessageThree,
		revsubtractionMessageFour,
		revsubtractionMessageFive,
		revsubtractionAnswer
	);

	//multiply
	console.log("   ~~Multiplication~~");

	let multiplicationMessageOne = "If you multiply ";
	let multiplicationMessageTwo = x;
	let multiplicationMessageThree = "by ";
	let multiplicationMessageFour = y;
	let multiplicationMessageFive = "the answer is: ";
	let multiplicationAnswer = x * y;

	console.log(
		multiplicationMessageOne,
		multiplicationMessageTwo,
		multiplicationMessageThree,
		multiplicationMessageFour,
		multiplicationMessageFive,
		multiplicationAnswer
	);

	//division
	console.log("   ~~Division~~");

	let divisionMessageOne = "If you divide ";
	let divisionMessageTwo = x;
	let divisionMessageThree = "by ";
	let divisionMessageFour = y;
	let divisionMessageFive = "the answer is: ";
	let divisionAnswer = x / y;

	console.log(
		divisionMessageOne,
		divisionMessageTwo,
		divisionMessageThree,
		divisionMessageFour,
		divisionMessageFive,
		divisionAnswer
	);

	//reverse division
	let revdivisionMessageOne = "If you divide ";
	let revdivisionMessageTwo = y;
	let revdivisionMessageThree = "by ";
	let revdivisionMessageFour = x;
	let revdivisionMessageFive = "the answer is: ";
	let revdivisionAnswer = y / x;

	console.log(
		revdivisionMessageOne,
		revdivisionMessageTwo,
		revdivisionMessageThree,
		revdivisionMessageFour,
		revdivisionMessageFive,
		revdivisionAnswer
	);

	console.log("Have a great day!");
} else {
	var groupLength = prompt("How many numbers do you need to work with?");
	var stringList = [];
	for (var a = 0; a < groupLength; a++) {
		stringList[a] = prompt("Enter a value: " + (a + 1));
	}

	var numList = stringList.map(Number);
	//check type change
	//console.log(typeof numList[2]);

	//working sort
	console.log("   ~~Ordered List~~");
	const sortCalc = numList.sort();
	console.log(sortCalc);

	//working min/max
	console.log("   ~~Minimum & Maximum~~");
	console.log("The smallest number is: " + Math.min.apply(Math, numList));
	console.log("The largest number is: " + Math.max.apply(Math, numList));

	//working mean

	function meanCalc() {
		const initialValue = 0;
		const sumWithInitial = numList.reduce(
			(previousValue, currentValue) => previousValue + currentValue,
			initialValue
		);

		console.log("   ~~Sum~~");
		console.log(sumWithInitial);

		const mean = sumWithInitial / numList.length;

		console.log("   ~~Mean~~");
		console.log(mean);
	}
	console.log(meanCalc(numList));

	//half working median
	console.log("   ~~Median~~");

	//function medianCalc () {
	console.log("There are " + groupLength + " numbers in your list.");

	if (groupLength % 2 === 0) {
		console.log("That means your list is even.");
		var almostMiddleLow = numList[Math.floor((numList.length - 1) / 2)];
		var almostMiddleHigh = numList[Math.floor(numList.length / 2)];
		console.log(
			"The middle two numers are " +
				almostMiddleLow +
				" and " +
				almostMiddleHigh
		);
		var medianCalc = (almostMiddleHigh + almostMiddleLow) / 2;
		console.log("The median is " + medianCalc);
	} else {
		console.log("That means your list is odd.");
		var middleOdd = numList[Math.floor(numList.length / 2)];
		console.log("The median number is " + middleOdd);
	}

	//}

	//console.log(medianCalc);

	//almost working mode
	console.log("   ~~Mode~~");

	function modeCalc(numList) {
		var frequency = []; // array of frequency.
		var maxFreq = 0; // holds the max frequency.
		var modes = [];

		for (var i in numList) {
			frequency[numList[i]] = (frequency[numList[i]] || 0) + 1; // increment frequency.

			if (frequency[numList[i]] > maxFreq) {
				// is this frequency > max so far ?
				maxFreq = frequency[numList[i]]; // update max.
			}
		}

		for (var k in frequency) {
			if (frequency[k] == maxFreq) {
				modes.push(k);
			}
		}

		return modes;
	}

	console.log(modeCalc(numList));

	//working range
	console.log("   ~~Range~~");
	const range = Math.max.apply(Math, numList) - Math.min.apply(Math, numList);
	console.log(range);
}
