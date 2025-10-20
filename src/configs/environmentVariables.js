const { stringToBoolean } = require('../helpers/helpFunctions')

module.exports = {
	getJiraAccessToken() {
		return readVariable('JIRA_ACCESS_TOKEN')
	},
	getJiraCycleId() {
		return readVariable('JIRA_CYCLE_ID')
	},
	getHeadless() {
		return readVariable('HEADLESS')
	},
}