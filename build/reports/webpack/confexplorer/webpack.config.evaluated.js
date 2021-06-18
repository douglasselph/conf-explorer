{
  mode: 'production',
  resolve: {
    modules: [
      '/home/dug/kreash/web/conf-explorer/build/js/packages/confexplorer/kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    },
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
      '/home/dug/kreash/web/conf-explorer/build/js/packages/confexplorer/kotlin-dce/confexplorer.js'
    ]
  },
  output: {
    path: '/home/dug/kreash/web/conf-explorer/build/distributions',
    filename: [Function: filename],
    library: 'confexplorer',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  }
}