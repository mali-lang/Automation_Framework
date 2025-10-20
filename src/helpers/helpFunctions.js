

function stringToBoolean(stringBoolean) {
	const trueStrings = ['true', 'does', 'do', 'is', 'are', 'on', 'has', 'was', 'were', 'with']
	const falseStrings = [
		'false',
		'does not',
		'do not',
		'is not',
		'are not',
		"doesn't",
		"don't",
		"isn't",
		"aren't",
		'off',
		'not',
		"hasn't",
		'was not',
		'were not',
		'without',
	]
	if (trueStrings.includes(stringBoolean)) {
		return true
	}
	if (falseStrings.includes(stringBoolean)) {
		return false
	}
	return null
}

function convertTimeToSeconds(converted, currentValue) {
	if (currentValue.includes('d')) {
		return converted * 24
	}
	if (currentValue.includes('h')) {
		return converted * 60
	}
	if (currentValue.includes('min')) {
		return converted * 60
	}
	if (currentValue.includes('s')) {
		return converted
	}
	return converted + parseInt(currentValue, 10)
}

async function waitClick(locator, waitTime = getWaitTime().loader) {
	const { Playwright } = this.helpers;

	await Playwright.waitForElement(locator, waitTime);

	const isVisible = await Playwright._isElementVisible(locator);
	if (!isVisible) {
		await Playwright.scrollTo(locator); // scrolls into view
	}

	await Playwright.click(locator)
}