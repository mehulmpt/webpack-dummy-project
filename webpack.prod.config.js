const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'production',
	entry: {
		myfile: './src/engine.tsx'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.scss', '.css', '.js', '.jsx'],
		alias: {
			logic: path.resolve(__dirname, 'src/logic'),
			components: path.resolve(__dirname, 'src/components')
		}
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/[name].[contenthash].js',
		publicPath: '/assets/'
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
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Hello world!',
			template: './dist/template.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: `css/[name].css`
		})
	]
}