const today = new Date();
const birthday = new Date(currentyear, 08, 28, 3, 45, 00, 000);
//birthday.setFullYear(today.getFullYear());
const msPerDay = 24 * 60 * 60 * 1000;
let daysLeft = (birthday.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft);

//check variables
//document.write(today);
document.write("My birthday is on September 28.");
//document.write(daysLeft);

//check for negative
negTest = Math.sign(daysLeft);
//document.write(negTest);

if (negTest == 1) {
	document.write("You have " + daysLeft + " days!");
} else {
	const nextBirthday = new Date(currentYear + 1, 08, 28, 3, 45, 00, 000);
	let updatedDaysLeft = (nextBirthday.getTime() - today.getTime()) / msPerDay;
	updatedDaysLeft = Math.ceil(updatedDaysLeft);
	
	document.write("You have " + updatedDaysLeft + " days!");
}
