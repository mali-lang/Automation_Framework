module.exports = {
	getWaitTime() {
		return {
			shortestWait: 0.1,
			hover: 0.5,
			second: 1,
			waitForElementNotPresent: 2,
			waitForElement: 5,
			longWaitForElement: 10,
			loader: 60,
			longWait: 180,
			loaderInMilliseconds: 45000,
		}
	},

	getVisualTolerance() {
		return {
			small: 0.5,
		}
	},
}
