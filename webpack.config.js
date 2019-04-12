const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpaclPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const pkg = require('./package.json');

const banner = `

    Package: ${pkg.name} v${pkg.version}

    File name: [filebase]

    Generated on: ${new Date(Date.now()).toLocaleString()}`;

const { HOST = '0.0.0.0', PORT = 3000, NODE_ENV } = process.env;

// eslint-disable-next-line max-lines-per-function

module.exports = (env, argv) => {
  const isProd = argv && argv.mode === 'production';
  const isDev = NODE_ENV === 'development';
  const modulesFolderPath = path.resolve(__dirname, 'node_modules');

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'static/js/[name].[hash:8].js',
      chunkFilename: 'static/js/[name].[hash:8].chunk.js',
      publicPath: '/'
    },

    resolve: {
      modules: [modulesFolderPath, 'node_modules'],
      extensions: ['.js', '.jsx'],

      alias: {
        components: path.resolve(__dirname, 'src/components'),
        pages: path.resolve(__dirname, 'src/pages'),
        'react-dom': '@hot-loader/react-dom'
      }
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          cache: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 20
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'async',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    },

    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          include: path.resolve(__dirname, 'src'),
          use: [
            'babel-loader?cacheDirectory=true',
            isProd
              ? false
              : {
                  loader: 'eslint-loader',
                  options: {
                    emitWarning: true
                  }
                }
          ].filter((p) => Boolean(p))
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, modulesFolderPath),
          use: isProd
            ? [MiniCssExtractPlugin.loader, 'css-loader']
            : ['style-loader', 'css-loader']
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'src'),
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]-[local]'
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /(\.gif|\.jpe?g|\.png)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 6000,
                name: 'static/media/[name]-[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    },

    devServer: {
      host: HOST,
      port: PORT,
      public: `localhost:${PORT}`,
      open: true,
      disableHostCheck: true,
      allowedHosts: ['*.localhost']
    },
    devtool: isProd ? false : 'cheap-module-source-map',
    plugins: [
      new webpack.NamedModulesPlugin(),
      isProd
        ? new MiniCssExtractPlugin({
            filename: 'static/css/[name].[hash:8].css',
            allChunks: true
          })
        : false,
      isProd ? false : new webpack.HotModuleReplacementPlugin(),
      new ProgressBarPlugin({ clear: false }),
      new HTMLWebpaclPlugin({
        cache: true,
        template: './src/static/index.html',
        favicon: './src/static/favicon.ico',
        filename: './index.html',
        package: `${pkg.name} v${pkg.version}`
      }),
      new webpack.BannerPlugin(banner),
      new webpack.DefinePlugin({
        WEBPACK_SAYS_IS_DEV: JSON.stringify(isDev)
      })
    ].filter((p) => Boolean(p)),

    performance: {
      hints: false
    },
    stats: 'minimal'
  };
};
