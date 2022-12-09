//Opening
document.write("Welcome! What is your name? ");
var userName = prompt("Welcome! What is your name? ");
document.write("Hello there, " + userName + "!");
document.write("Please enjoy using this calculator!");

document.write("I can do two sets of computations!");
document.write(
	"Option a: If you give me two numbers, I can add, subtract, multiple and divide them for you."
);
document.write(
	"Option b: If you give me a list of numbers I can help you find mean, median, and mode"
);

document.write(
	"Please select which option you want to try by entering a or b: "
);
let calChoice = prompt(
	"I can do two sets of computations!  Option a: If you give me two numbers, I can add, subtract, multiple and divide them for you.  Option b: If you give me a list of numbers I can help you find mean, median, and mode. ***Please select which option you want to try by entering a or b: "
);

if (calChoice == "a") {
	var x = prompt("Enter a Value", "0");
	var y = prompt("Enter a Value", "0");
	var num1 = parseFloat(x);
	var num2 = parseFloat(y);

	//addition
	document.write("   ~~Addition~~");

	let additionMessageOne = "If you add ";
	let additionMessageTwo = x;
	let additionMessageThree = "by ";
	let additionMessageFour = y;
	let additionMessageFive = "the answer is: ";
	let additionAnswer = x + y;

	document.write(
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

	document.write(
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

	document.write(
		revsubtractionMessageOne,
		revsubtractionMessageTwo,
		revsubtractionMessageThree,
		revsubtractionMessageFour,
		revsubtractionMessageFive,
		revsubtractionAnswer
	);

	//multiply
	document.write("   ~~Multiplication~~");

	let multiplicationMessageOne = "If you multiply ";
	let multiplicationMessageTwo = x;
	let multiplicationMessageThree = "by ";
	let multiplicationMessageFour = y;
	let multiplicationMessageFive = "the answer is: ";
	let multiplicationAnswer = x * y;

	document.write(
		multiplicationMessageOne,
		multiplicationMessageTwo,
		multiplicationMessageThree,
		multiplicationMessageFour,
		multiplicationMessageFive,
		multiplicationAnswer
	);

	//division
	document.write("   ~~Division~~");

	let divisionMessageOne = "If you divide ";
	let divisionMessageTwo = x;
	let divisionMessageThree = "by ";
	let divisionMessageFour = y;
	let divisionMessageFive = "the answer is: ";
	let divisionAnswer = x / y;

	document.write(
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

	document.write(
		revdivisionMessageOne,
		revdivisionMessageTwo,
		revdivisionMessageThree,
		revdivisionMessageFour,
		revdivisionMessageFive,
		revdivisionAnswer
	);

	document.write("Have a great day!");
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
	document.write("   ~~Ordered List~~");
	const sortCalc = numList.sort();
	document.write(sortCalc);

	//working min/max
	document.write("   ~~Minimum & Maximum~~");
	document.write("The smallest number is: " + Math.min.apply(Math, numList));
	document.write("The largest number is: " + Math.max.apply(Math, numList));

	//working mean

	function meanCalc() {
		const initialValue = 0;
		const sumWithInitial = numList.reduce(
			(previousValue, currentValue) => previousValue + currentValue,
			initialValue
		);

		document.write("   ~~Sum~~");
		document.write(sumWithInitial);

		const mean = sumWithInitial / numList.length;

		document.write("   ~~Mean~~");
		document.write(mean);
	}
	document.write(meanCalc(numList));

	//half working median
	document.write("   ~~Median~~");

	//function medianCalc () {
	document.write("There are " + groupLength + " numbers in your list.");

	if (groupLength % 2 === 0) {
		document.write("That means your list is even.");
		var almostMiddleLow = numList[Math.floor((numList.length - 1) / 2)];
		var almostMiddleHigh = numList[Math.floor(numList.length / 2)];
		document.write(
			"The middle two numers are " +
				almostMiddleLow +
				" and " +
				almostMiddleHigh
		);
		var medianCalc = (almostMiddleHigh + almostMiddleLow) / 2;
		document.write("The median is " + medianCalc);
	} else {
		document.write("That means your list is odd.");
		var middleOdd = numList[Math.floor(numList.length / 2)];
		document.write("The median number is " + middleOdd);
	}

	//}

	//console.log(medianCalc);

	//almost working mode
	document.write("   ~~Mode~~");

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

	document.write(modeCalc(numList));

	//working range
	document.write("   ~~Range~~");
	const range = Math.max.apply(Math, numList) - Math.min.apply(Math, numList);
	document.write(range);
}
