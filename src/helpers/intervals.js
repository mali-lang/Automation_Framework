const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const WEEK = DAY * 7
const MONTH = DAY * 30
const YEAR = DAY * 365

const Interval = {
	SECOND,
	MINUTE,
	HOUR,
	DAY,
	WEEK,
	MONTH,
	YEAR,
}

function getInSeconds(milliseconds) {
	return milliseconds / 1000
}

module.exports = {
	Interval,
	getInSeconds,
}
