module.exports = {
	plugins: [
		require('autoprefixer')({ overrideBrowserslist: ['iOS >= 8', 'Android >= 5.0'] }),
		require('postcss-pxtorem')({
			rootValue: 75,
			propList: ['*', '!letter-spacing', '!border*'],
		}),
	]
}
