const d = new Date();

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("update").textContent = fulldate;

let dayOfWeek = new Date();
const banner = document.getElementById("alert");
if (dayOfWeek.getDay() == 5) {
    banner.style.display = "content";
} else {
    banner.style.display = "none";
}