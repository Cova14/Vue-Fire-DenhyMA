function setDefaultValue(obj, value) {
	return obj === undefined? value : obj
}

module.exports = function safetify(config) {
	if (typeof config !== 'object') {
		throw new TypeError('Expect an object but got ' + typeof config)
	}
	config.resolve = setDefaultValue(config.resolve, {})
	config.resolve.extensions = setDefaultValue(config.resolve.extensions, ['', '.js'])

	config.resolveLoader = setDefaultValue(config.resolveLoader, {})
	config.resolveLoader.modulesDirectories = setDefaultValue(config.resolveLoader.modulesDirectories, [])

	config.module = setDefaultValue(config.module, {})
	config.module.loaders = setDefaultValue(config.module.loaders, [])

	config.plugins = setDefaultValue(config.plugins, [])

	return config
}
