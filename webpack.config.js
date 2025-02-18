const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pagesDir = path.resolve(__dirname, 'src/pages');
const entry = {
  index: path.resolve(__dirname, 'src/index.js')
};

fs.readdirSync(pagesDir).forEach(folder => {
  const folderPath = path.join(pagesDir, folder);
  if (fs.statSync(folderPath).isDirectory()) {
    entry[folder] = path.join(folderPath, 'index.js');
  }
});

const htmlPlugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'src/index.html'),
    chunks: ['index'],
  }),
  ...Object.keys(entry).filter(name => name !== 'index').map(name => {
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.join(pagesDir, name, 'index.html'),
      chunks: [name],
    });
  })
];

module.exports = {
  mode: 'development',
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    ...htmlPlugins
  ],
  devServer: {
    static: './dist',
    open: true,
    historyApiFallback: {
      rewrites: Object.keys(entry).map(name => ({
        from: new RegExp(`^/${name}$`),
        to: `/${name}.html`
      })),
    },
  },
};