{
  mode: 'development',
  resolve: {
    modules: [
      '/home/dug/kreash/web/conf-explorer/build/js/packages/confexplorer/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/home/dug/kreash/web/conf-explorer/build/js/packages/confexplorer/kotlin-dce-dev/confexplorer.js'
    ]
  },
  output: {
    path: '/home/dug/kreash/web/conf-explorer/build/distributions',
    filename: [Function: filename],
    library: 'confexplorer',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/home/dug/kreash/web/conf-explorer/build/processedResources/js/main'
    ]
  }
}