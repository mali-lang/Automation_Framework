module.exports = function (string) {
	if (!string) return ''
	return string
		.replace(/ /g, '_')
		.replace(/"/g, "'")
		.replace(/\//g, '_')
		.replace(/</g, '(')
		.replace(/>/g, ')')
		.replace(/:/g, '_')
		.replace(/\\/g, '_')
		.replace(/\|/g, '_')
		.replace(/\?/g, '.')
		.replace(/\*/g, '^')
		.replace(/['@\-{},]/g, '')
}