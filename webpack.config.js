const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require('path');

module.exports = NODE_ENV => {
    const devMode = NODE_ENV !== 'production';
    return {
        entry: [
            './app/main.js',
        ],
        output: {
            path: path.join(__dirname, 'assets'),
            filename: '[name].js',
            chunkFilename: '[chunkhash].js',
            publicPath: '/assets/',
        },
        cache: true,
        bail: true,
        profile: true,
        parallelism: 1,
        watch: true,
        resolve: {
            alias: {
                modules: path.resolve(__dirname, 'app/modules/'),
                components: path.resolve(__dirname, 'app/components/'),
                assets: path.resolve(__dirname, 'app/assets/'),
            },
            extensions: ['*', '.js', '.jsx']
        },
        optimization: {
            removeEmptyChunks: true,
            mergeDuplicateChunks: true,
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({})
            ],
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true
                    },
                    vendors: {
                        filename: 'common.js'
                    }
                },
            }
        },
        module: {
            noParse: /node_modules\/dist/,
            rules: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/preset-react'],
                    env: {
                        production: {
                            plugins: ['transform-react-remove-prop-types']
                        }
                    }
                }
            }, {
                test: /\.html/,
                loader: 'html'
            }, {
                test: /\.(css|less)$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)(\?\S*)?$/, loader: 'url-loader?limit=100000'
            }, {
                test: /\.(png|jpg|gif)$/, loader: 'file-loader'
            }]
        },
        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            new MiniCssExtractPlugin({
                filename: 'style.css',
            }),
        ]
    }
};
