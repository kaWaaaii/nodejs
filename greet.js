let curretDate = new Date();
module.exports.date = curretDate;

module.exports.getMessage = (name) => {
	let hour = curretDate.getHours();
	if(hour > 16) {
		return "Добрый вечер, " + name
	} else if (hour > 10) {
		return "Добрый день, " + name
	} else {
		return "Доброе утро, " + name
	}
}