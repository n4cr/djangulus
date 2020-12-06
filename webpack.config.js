const path = require('path');
const exclusions = /node_modules/;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isDevMode = process.env.WEBPACK_MODE === 'development'
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    watch: isDevMode,
    entry: {
        app: "./frontend/js/app.js",
    },
    output: {
        path: path.resolve(__dirname, "djangulus/static"), // Should be in STATICFILES_DIRS
        publicPath: "/static/", // Should match Django STATIC_URL
        filename: "js/[name].js", // No filename hashing, Django takes care of this
        chunkFilename: "[id]-[chunkhash].js", // DO have Webpack hash chunk filename, see below
    },
    devServer: {
        writeToDisk: true, // Write files to disk in dev mode, so Django can serve the assets
        port: 8081,
        open: false
    },
    module: {
        rules: [
            {
                test: /.*/,
                include: path.resolve(__dirname, "frontend/img"),
                exclude: exclusions,
                options: {
                    context: path.resolve(__dirname, "frontend/"),
                    name: "[path][name].[ext]",
                },
                loader: "file-loader",
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', {'plugins': ['@babel/plugin-proposal-class-properties']}]
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    "sass-loader"
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: 'frontend/img', to: 'img'},
            ]
        })
    ],
}
