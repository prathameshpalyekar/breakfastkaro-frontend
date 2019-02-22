const gulp = require("gulp");
const { task } = require('gulp');
const gutil = require("gulp-util");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");
const terminalLink = require('terminal-link');

const browserSync = require('browser-sync').create();

const WEBPACK_SERVER_PORT = 5001;
const WEBPACK_NETWORK_IP = '0.0.0.0';
const WEBPACK_SERVER_HOST = 'http://' + WEBPACK_NETWORK_IP;
const WEBPACK_SERVER_CONFIG = WEBPACK_SERVER_HOST + ':' + WEBPACK_SERVER_PORT;

function buildAssets(callback) {
    let webpackOptions = Object.assign({}, webpackConfig('production'));
    webpackOptions.mode = 'production';
    webpackOptions.plugins = webpackOptions.plugins.concat(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    );
    webpack(webpackOptions, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack:build", err);
        }
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        gulp.src('assets/**/*')
        .pipe(gulp.dest('../breakfastkaro-backend/public/assets'));
        callback();
    });
};

function defaultTask(done) {
    let webpackOptions = Object.assign({}, webpackConfig('development'));
    webpackOptions.devtool = 'inline-source-map';
    webpackOptions.mode = 'development';
    webpackOptions.plugins = webpackOptions.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]);

    webpackOptions.entry = [
        'webpack-dev-server/client?' + WEBPACK_SERVER_CONFIG, 
        'webpack/hot/only-dev-server',
        './app/main.js',
    ];

    new WebpackDevServer(webpack(webpackOptions), {
        publicPath: '/assets/',
        contentBase: 'dist/',
        historyApiFallback: true,
        inline: true,
        progress: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        stats: {
            colors: true,
            hash: false,
            version: false,
            assets: false,
            chunks: false,
            modules: false,
            errors: true,
            errorDetails: false,
            warnings: true,
            publicPath: true
        },
        proxy: {
            '/api/*': {
                target: WEBPACK_SERVER_CONFIG
            },
            '/nes/*': {
                target: WEBPACK_SERVER_CONFIG
            }
        },
    }).listen(WEBPACK_SERVER_PORT, WEBPACK_NETWORK_IP, (err) => {
        if (err) {
            throw new gutil.PluginError("webpack-dev-server", err);
        }
        gutil.log("[webpack-dev-server]", WEBPACK_SERVER_CONFIG + "/webpack-dev-server/index.html");
        done();
        const serverLink = WEBPACK_SERVER_CONFIG;
        const link = terminalLink('Server started at ' + serverLink, serverLink);
        console.log(link);
    });
};

task('default', defaultTask);
// Production build
task('build', buildAssets);

