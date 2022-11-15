const today = new Date();
const birthday = new Date(1983, 12, 28, 3, 45, 00, 000);
birthday.setFullYear(today.getFullYear());
const msPerDay = 24 * 60 * 60 * 1000;
let daysLeft = (birthday.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft);

//check variables
//document.write(today);
document.write("My birthday is on " + birthday + ". ");
//document.write(daysLeft);

//check for negative
//negTest = Math.sign(daysLeft);
//document.write(negTest);

if ((negTest = 1)) {
	document.write("You have " + daysLeft + " days!");
} else {
	const endOfYear = new Date(1983, 12, 31, 24, 60, 60, 999);
	endOfYear.setFullYear(today.getFullYear());
	const msPerDay = 24 * 60 * 60 * 1000;
	let daysLeftThisYear = (today.getTime() - endOfYear.getTime()) / msPerDay;
	daysLeftThisYear = Math.round(daysLeftThisYear);
	let updatedDaysLeft = daysLeft + daysLeftThisYear;

	document.write("You have " + updatedDaysLeft + " days!");
}
