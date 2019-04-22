const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
	mode: 'development',
	entry: {
		myfile: './src/engine.tsx'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.scss', '.css', '.js', '.jsx']
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/main.[hash].js',
		publicPath: '/assets/'
	},
	devServer: {
		port: 1234,
		hot: true,
		contentBase: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Hello world!',
			template: './dist/template.html',
			filename: '../dist/index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true
			},
			alwaysWriteToDisk: true
		}),
		new HTMLWebpackHarddiskPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
}