const dayOfWeek = (date = new Date()) => {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursdays', 'Friday', 'Saturday'];

	return days[date.getDay()]
}

try {
	document.getElementById("day").innerText = dayOfWeek();
} catch (error) {
	console.log(error);
	
}

exports.dayOfWeek = dayOfWeek;