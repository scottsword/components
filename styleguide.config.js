const path = require('path');

module.exports = {
 title: "TSheets Styleguide",
 components: './src/components/**/*.js',
 updateWebpackConfig(webpackConfig) {
	// Your source files folder or array of folders, should not include node_modules
	const dir = path.join(__dirname, 'src');
	webpackConfig.module.loaders.push(
	 // Babel loader will use your project’s .babelrc
	 {
	   test: /\.js?$/,
	   include: dir,
	   loader: 'babel'
	 },
	 // Other loaders that is needed for your components
      {
        test: /\.scss$/,
        include: dir,
        loaders: ["style", "css", "sass"]
      }
	);
	return webpackConfig;
	}
};