const { recorder, output, container } = require('codeceptjs')
const { getRandomString } = require('./helpFunctions')
const clearString = require('../plugins/utils/clearString')

module.exports = {
	initTestFailed() {
		addScreenshotHandler('screenshotOnFail', 'Test failed, try to save a screenshot', 'failed')
	},
}

function addScreenshotHandler(plugin, message, status) {
	recorder.add(
		`screenshot of ${status} test`,
		async () => {
			await takeScreenshots(plugin, message, status)
		},
		true,
	)
}

async function takeScreenshots(plugin, message, status) {
	const windows = await WebDriver.grabAllWindowHandles()
	for (const [index, window] of windows.entries()) {
		await WebDriver.switchToWindow(window)
		output.plugin(plugin, message)

		try {
			await WebDriver.saveScreenshot(generateFileName(index, status), process.env.OPTIONS.fullPageScreenshots)
		} catch (err) {
			handleError(err)
		}
	}
}

function generateFileName(index, status) {
	return `${clearString(process.env.TEST_TITLE)}_window${index + 1}_${getRandomString(5)}.${status}.png`
}

function handleError(err) {
	output.plugin(err)
	if (isError(err)) {
		output.log(`Can't make screenshot, ${err}`)
		WebDriver.isRunning = false
	}
}

function isError(error) {
	return (
		error?.type === 'RuntimeError' &&
		(error?.message.indexOf('was terminated due to') > -1 ||
			error?.message.indexOf('no such window: target window already closed') > -1)
	)
}