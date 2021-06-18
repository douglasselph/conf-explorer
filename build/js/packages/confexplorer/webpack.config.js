let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/home/dug/kreash/web/conf-explorer/build/js/packages/confexplorer/kotlin-dce-dev/confexplorer.js"]
};

config.output = {
    path: "/home/dug/kreash/web/conf-explorer/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "confexplorer.js"
            : "confexplorer-[name].js";
    },
    library: "confexplorer",
    libraryTarget: "umd",
    globalObject: "this"
};

// resolve modules
config.resolve.modules.unshift("/home/dug/kreash/web/conf-explorer/build/js/packages/confexplorer/kotlin-dce-dev")

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';
config.stats = config.stats || {}
Object.assign(config.stats, config.stats, {
    warningsFilter: [/Failed to parse source map/]
})

// dev server
config.devServer = {
  "inline": true,
  "lazy": false,
  "noInfo": true,
  "open": true,
  "overlay": false,
  "contentBase": [
    "/home/dug/kreash/web/conf-explorer/build/processedResources/js/main"
  ]
};

// css settings
;(function(config) {
    ;(function(config) {
       const use = [
           {
               loader: 'css-loader',
               options: {},
           }
       ]
       use.unshift({
           loader: 'style-loader',
           options: {}
       })
       
       config.module.rules.push({
           test: /\.css$/,
           use: use,
           
           
       })

   })(config);
            
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin(tcErrorPlugin))
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/home/dug/kreash/web/conf-explorer/build/reports/webpack/confexplorer/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
