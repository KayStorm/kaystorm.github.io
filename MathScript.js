//Opening
/*document.write("Welcome! What is your name? ");
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
*/
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
	document.write("<br>");
	document.write("If you add " + x + " by " + y + " the answer is: " + (x + y));
	document.write("<br>");
	document.write("<br>");

	//subtraction
	document.write("   ~~Subtraction~~");

	document.write("<br>");
	document.write(
		"If you subtract " + x + " from " + y + " the answer is: " + (x - y)
	);
	document.write("<br>");

	document.write(
		"If you subtract " + y + " from " + x + " the answer is: " + (y - x)
	);
	document.write("<br>");
	document.write("<br>");

	//multiply
	document.write("   ~~Multiplication~~");
	document.write("<br>");

	document.write(
		"If you multiply " + x + " by " + y + " the answer is: " + x * y
	);
	document.write("<br>");
	document.write("<br>");

	//division
	document.write("   ~~Division~~");
	document.write("<br>");

	document.write(
		"If you divide " + x + " by " + y + " the answer is: " + x / y
	);
	document.write("<br>");

	//reverse division
	document.write(
		"If you divide " + y + " by " + x + " the answer is: " + y / x
	);
	document.write("<br>");
	document.write("<br>");

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
	document.write("<br>");
	const sortCalc = numList.sort();
	document.write(sortCalc);
	document.write("<br>");

	//working min/max
	document.write("   ~~Minimum & Maximum~~");
	document.write("<br>");
	document.write("The smallest number is: " + Math.min.apply(Math, numList));
	document.write("<br>");
	document.write("The largest number is: " + Math.max.apply(Math, numList));
	document.write("<br>");

	//working mean

	function meanCalc() {
		const initialValue = 0;
		const sumWithInitial = numList.reduce(
			(previousValue, currentValue) => previousValue + currentValue,
			initialValue
		);

		document.write("   ~~Sum~~");
		document.write("<br>");
		document.write(sumWithInitial);
		document.write("<br>");

		const mean = sumWithInitial / numList.length;

		document.write("   ~~Mean~~");
		document.write("<br>");
		document.write(mean);
		document.write("<br>");
	}
	document.write(meanCalc(numList));
	document.write("<br>");

	//half working median
	document.write("   ~~Median~~");
	document.write("<br>");

	//function medianCalc () {
	document.write("There are " + groupLength + " numbers in your list.");
	document.write("<br>");

	if (groupLength % 2 === 0) {
		document.write("That means your list is even.");
		document.write("<br>");
		var almostMiddleLow = numList[Math.floor((numList.length - 1) / 2)];
		var almostMiddleHigh = numList[Math.floor(numList.length / 2)];
		document.write(
			"The middle two numers are " +
				almostMiddleLow +
				" and " +
				almostMiddleHigh
		);
		document.write("<br>");
		var medianCalc = (almostMiddleHigh + almostMiddleLow) / 2;
		document.write("The median is " + medianCalc);
		document.write("<br>");
	} else {
		document.write("That means your list is odd.");
		document.write("<br>");
		var middleOdd = numList[Math.floor(numList.length / 2)];
		document.write("The median number is " + middleOdd);
		document.write("<br>");
	}

	//}

	//console.log(medianCalc);

	//almost working mode
	document.write("   ~~Mode~~");
	document.write("<br>");

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
	document.write("<br>");

	//working range
	document.write("   ~~Range~~");
	document.write("<br>");
	const range = Math.max.apply(Math, numList) - Math.min.apply(Math, numList);
	document.write(range);
	document.write("<br>");
	document.write("<br>");

	document.write("Have a great day!");
}
