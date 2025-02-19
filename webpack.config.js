const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = path.resolve(__dirname, 'src');
const entry = {};

function addEntries(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      addEntries(fullPath);
    } else if (file.endsWith('.js')) {
      const name = path.relative(srcDir, fullPath).replace(/\\/g, '/').replace('.js', '');
      entry[name] = fullPath;
    }
  });
}

addEntries(srcDir);

const htmlPlugins = Object.keys(entry).map(name => ({
  filename: `${name}.html`,
  template: entry[name].replace('.js', '.html'),
  chunks: [name],
}));

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
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: htmlPlugins.map(plugin => new HtmlWebpackPlugin(plugin)),
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