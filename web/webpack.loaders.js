module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: ['babel-loader'],
    query: {
      presets: ['es2015', 'react'],
    },
  },
  {
    test: /\.scss$/,
    loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
  },
];
