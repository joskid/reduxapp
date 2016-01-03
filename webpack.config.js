'use strict';

var webpack = require('webpack');

module.exports = {

	entry: {
		redux: './redux/app.jsx'
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js'
	},

	devtool: 'eval',
	watch: true,

	resolve: {
		modulesDirectories: ['node_modules', 'redux'],
		extensions: ['', '.js', '.jsx']
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js']
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			'React': 'react'
		})
	],

	module: {

		loaders: [
			{ 
				test: [/\.jsx$/, /\.js$/],
				loader: 'babel-loader',
				exclude: /node_modules/,
	            query: {
	                cacheDirectory: true,
	                presets: ['es2015', 'react']
            	}
			},
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.(jpg|png|woff|woff2|ttf|eot|svg)$/, loader: 'file-loader?name=[path][name].[ext]' }
		]

	}

}