var path = require('path');
var webpack = require('webpack');

module.exports = {

	entry: {
		app: './js/app/main.js',
		common: ['./js/lib/jquery.js', './js/lib/require.js', './js/lib/jquery.colorbox.js']
	},
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: '[name].bundle.js'
	},
	resolve: {
		modulesDirectories: ['js/lib', 'node_modules'],
		alias: {
			"app": path.resolve(__dirname, 'js/app'),
		}
	},
	externals: {
        jquery: 'jQuery'
    },
    module: {
    	loaders: [{
    		test: /jquery\.colorbox/,
    		loader: 'exports?jQuery'
    	}]
    },
    plugins: [
    	new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ]
};
