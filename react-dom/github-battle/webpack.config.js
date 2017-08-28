var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
		entry: "./app/index.js", 				//points to root js

		module: {rules: [
			{ test: /\.(js)$/, use: "babel-loader?compact=false"},
			{ test: /\.css$/, use: ["style-loader", "css-loader"] } 	//use the loader on things ending in .css. just npm install the loader
		]},
		output: {
			path: path.resolve(__dirname, "dist"),	//where to put output (__dirname is the current directory)
			filename: "index_bundle.js",		//can now be referenced at app/dist/index_bundle.js
			publicPath: '/',
		},
		devServer: {
	    historyApiFallback: true,
	  },
		plugins: [
			new HtmlWebpackPlugin({
				template: "app/index.html"		//creates a second version of your index.html that references your bundled js
			})
		]
	}
