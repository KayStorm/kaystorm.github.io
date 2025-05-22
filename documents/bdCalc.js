const today = new Date();
const currentYear = today.getFullYear();
const birthday = new Date(currentYear, 8, 28, 3, 45, 0, 0); // 8 = September

const msPerDay = 24 * 60 * 60 * 1000;
let daysLeft = (birthday.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft);

document.write("My birthday is on September 28.<br>");

// Check for negative
const negTest = Math.sign(daysLeft);

if (negTest == 1) {
    document.write("You have " + daysLeft + " days!");
} else {
    const nextBirthday = new Date(currentYear + 1, 8, 28, 3, 45, 0, 0);
    let updatedDaysLeft = (nextBirthday.getTime() - today.getTime()) / msPerDay;
    updatedDaysLeft = Math.ceil(updatedDaysLeft);

    document.write("You have " + updatedDaysLeft + " days!");
}
