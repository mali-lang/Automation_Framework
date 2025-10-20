const { I } = inject()
const { getVisualTestingTolerance } = require('../../src/configs/environmentVariables')
const { assert } = require('chai')



module.exports = {
	async testElementExist(path, shouldExist, wait = getWaitTime().loader) {
		if (shouldExist) {
			I.waitForElement(path, wait)
			return
		}
		await I.waitForInvisible(path, wait)
	},

	async verifyElementVisible(path, shouldExist, wait = getWaitTime().loader) {
		const isVisible = await I.isVisibleInViewport(path, wait)
		assert.equal(isVisible, shouldExist, `Element ${shouldExist ? 'is not' : 'is'} visible`)
	},

	async fillFieldWithClearAndConfirm(path, text) {
		await this.fillFieldWithClear(path, text)
		I.pressKey('Enter')
	},

	async fillFieldWithClear(path, text, wait = getWaitTime().hover) {
		await this.clickAndEraseText(path, wait)
		I.type(text)
	},

	async clickAndEraseText(path, wait = getWaitTime().hover) {
		await I.waitClick(path)
		I.wait(wait)
		this.eraseText()
		I.wait(wait)
	},

	eraseText() {
		I.pressKey([this.getControl(), 'a'])
		I.wait(getWaitTime().hover)
		I.pressKey('Backspace')
	},

	copyAll() {
		I.pressKey([this.getControl(), 'a'])
		I.pressKey([this.getControl(), 'c'])
	},

	/**
	 * @param {String} fileName - Name of screenshot file.
	 * @param {String} path - Path to element.
	 */
	async visuallyTestElement(fileName, path, tolerance = getVisualTestingTolerance()) {
		I.waitForVisible(path, getWaitTime().loader)
		const totalAttempts = 2
		for (let attempt = 0; attempt < totalAttempts; attempt++) {
			I.wait(getWaitTime().second)
			try {
				await I.takeScreenshot(fileName, 'actual', path)
				await I.checkVisualDifferences(fileName, { tolerance })
				return
			} catch {
				I.say('Screenshot did not match')
			}
		}
		I.wait(getWaitTime().second)
		await I.takeScreenshot(fileName, 'actual', path)
		await I.checkVisualDifferences(fileName, { tolerance })
	},

	/**
	 * This function is for create screenshot for visual testing.
	 * @param {String} fileName - Name of screenshot file.
	 * @param {String} path - Path to element.
	 */
	async createExpectedScreenshotOfElement(fileName, path) {
		I.waitForVisible(path, getWaitTime().loader)
		I.wait(getWaitTime().second)
		await I.takeScreenshot(fileName, 'expected', path)
	},


	/**
	 *
	 * @param elementPath - Path to element
	 * @param attributeName - Element attribute
	 * @param shouldExist - Boolean value if attribute should exist
	 * @param wait
	 * @returns boolean - Boolean condition result
	 */
	async verifyAttribute(elementPath, attributeName, shouldExist = true, wait = getWaitTime().longWaitForElement) {
		I.waitForElement(elementPath, wait)
		const attributeValue = await I.grabAttributeFrom(elementPath, attributeName)
		return attributeValue === shouldExist.toString()
	},

	async getCheckedValue(path) {
		return I.getElementPropertyByJavascript(path, 'checked')
	},

	async verifyCheckedValue(path, shouldBeChecked) {
		assert.equal(await I.getElementPropertyByJavascript(path, 'checked'), shouldBeChecked)
	},

	async scrollUntilElementIsVisible(containerPath, elementPath, fail = true, attempts = 0) {
		if (!attemptsCheck(attempts, fail)) return false;

		const container = page.locator(containerPath);
		const element = container.locator(elementPath);

		const isVisible = await element.isVisible();
		if (!isVisible) {
			await element.scrollIntoViewIfNeeded();
			return this.scrollUntilElementIsVisible(containerPath, elementPath, fail, attempts + 1);
	}

		return true
	},

	async scrollUntilElementIsClickable(elementPath, fail = true, attempts = 0) {
		if (!attemptsCheck(attempts, fail)) return false
		if (!(await this.isElementClickable(elementPath, getWaitTime().waitForElementNotPresent))) {
			await this.waitScrollIntoView(`(${elementPath})[last()]`)
			return this.scrollUntilElementIsClickable(elementPath, fail, attempts + 1)
		}
		return true
	},

	attemptsCheck(attempts, fail) {
	if (attempts > getGenericNumberOfSteps()) {
		if (fail) {
			assert.fail("Too many scrolls, the element probably doesn't exist")
		}
		console.log("Too many scrolls, the element probably doesn't exist")
		return false
	}
		return true
	},

// Get max attempt steps
	getGenericNumberOfSteps() {
		const value = readVariable('GENERIC_NUMBER_OF_STEPS');
		return value ? parseInt(value, 10) : 10;
	}

}
