import PATH from './path.config.js';

module.exports = {
	entry: PATH.src.js + '/components/Root.js',
	devtool: 'source-map',
	output: {
		path: PATH.dist.js,
		filename: 'bundle.js'
	},

	module: {
		loaders: [

			//Javascript Loader
			{ test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/' },

			//SCSS/CSS Loader
			{ test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
		]
	}
	
}
