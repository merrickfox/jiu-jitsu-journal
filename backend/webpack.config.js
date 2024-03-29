const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals')

module.exports = {
	entry: slsw.lib.entries,
	target: 'node',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
			}
		]
	},
	externals: [nodeExternals()]
};