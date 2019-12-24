const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, argv.mode === 'production' ? 'build' : 'src'),
      filename: "index.js",
      publicPath: argv.mode === 'production' ? '/' : '/src/'
    },

    plugins: argv.mode === 'production' ? [
      new HtmlWebpackPlugin({
        filename: 'index.html'
      })
    ] : [],

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.svg$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: path.join('assets', 'images'),
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', "@babel/preset-react"]
            }
          }
        }
      ]
    },

    resolve: {
      alias: {
        '@images': path.resolve(__dirname, 'src/assets/images/'),
        "@components": path.resolve(__dirname, 'src/components')
      }
    },

    devServer: {
      contentBase: path.join(__dirname, argv.mode === 'production' ? 'build' : 'public/'),
      port: 3000,
      hotOnly: true
    }
  };
}
