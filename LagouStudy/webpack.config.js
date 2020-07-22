const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'none',
	stats: 'none',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							// ['@babel/plugin-proposal-decorators', {legacy: true}],
							['@babel/plugin-proposal-class-properties', {loose: true}],
						],
					},
				},
			},
		],
	},
	plugins: [new HtmlWebpackPlugin()],
}
