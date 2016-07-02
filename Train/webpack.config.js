module.exports = {
	entry: './main.js',
	output: {
		publicPath: '/static/',
		path: 'static',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders : ["babel-loader"],
			exclude: /node_modules/
		}]
	}
}