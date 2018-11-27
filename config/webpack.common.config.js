/*eslint-env es6, serviceworker */
/*global client, self */

const webpack = require( 'webpack' );
const {
    GenerateSW
} = require( 'workbox-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const CleanWebPackPlugin = require( 'clean-webpack-plugin' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const ExtractTextWebpackPlugin = require( 'extract-text-webpack-plugin' );
const commonPaths = require( './common-paths' );

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: commonPaths.outputPath
    },
    module: {
        rules: [ {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                options: {
                    failOnWarning: true,
                    failOnerror: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ExtractTextWebpackPlugin.extract( {
                    fallback: 'style-loader',
                    use: [ {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                } )
                //exclude: /node_modules/
            },
            {
                test: /\.svg|.png|.jpg$/,
                loader: 'url-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new ExtractTextWebpackPlugin( 'styles.css' ),
        new webpack.optimize.CommonsChunkPlugin( {
            filename: 'common.js',
            minChunks: 3,
            name: 'common'
        } ),
        new CleanWebPackPlugin( [ 'public' ], {
            root: commonPaths.root
        } ),
        new HtmlWebPackPlugin( {
            template: commonPaths.template,
            favicon: commonPaths.favicon,
            inject: true
        } ),
        new webpack.DefinePlugin( {
            AWS_ACCESS_KEY_ID: JSON.stringify( process.env.AWS_ACCESS_KEY_ID ),
            AWS_SECRET_ACCESS_KEY: JSON.stringify( process.env.AWS_SECRET_ACCESS_KEY ),
            GOOGLE_MAPS_API_KEY: JSON.stringify( process.env.GOOGLE_MAPS_API_KEY ),
            MAPBOX_API_TOKEN: JSON.stringify( process.env.MAPBOX_API_TOKEN ),
            API_URL: JSON.stringify( process.env.API_URL )
        } ),
        new CopyWebpackPlugin( [ {
            from: "src\/meta",
            to: "meta"
        }, {
            from: "src\/js",
            to: "js"
        }, {
            from: "src\/css",
            to: "css"
        }, {
            from: "src\/manifest.json",
            to: "manifest.json"
        } ] ),
        new GenerateSW( {
            swDest: "sw.js",
            clientsClaim: true,
            skipWaiting: true,
            importWorkboxFrom: "local",
            include: [ /\.html$/, /\.js$/, /\.css$/, /\/js\/\.js$/, /\/css\/\.css$/ ],
            directoryIndex: "index.html",
            offlineGoogleAnalytics: true,
            runtimeCaching: [ {
                    urlPattern: /\.mp3$/,
                    handler: "cacheFirst",
                    options: {
                        cacheName: "placecast-audio",
                        expiration: {
                            maxEntries: 20,
                            maxAgeSeconds: 24 * 60 * 60
                        },
                        cacheableResponse: {
                            statuses: [ 0, 200 ]
                        }
                    }
                },
                {
                    urlPattern: new RegExp( "^https://fonts.(?:googleapis|gstatic).com/(.*)" ),
                    handler: "cacheFirst",
                    options: {
                        cacheName: "font-cache"
                    }
                }, {
                    urlPattern: /^http.*\.cloudfront.net\/.*\.(?:png|jpg|jpeg|svg|gif)/,
                    handler: "cacheFirst",
                    options: {
                        cacheName: "placecast-photos",
                        expiration: {
                            maxEntries: 50,
                            maxAgeSeconds: 3 * 24 * 60 * 60
                        },
                        cacheableResponse: {
                            statuses: [ 0, 200 ]
                        }
                    }
                },
                {
                    urlPattern: /.*/,
                    handler: "cacheFirst",
                    options: {
                        cacheName: "dynamic-cache",
                        expiration: {
                            maxAgeSeconds: 3 * 24 * 60 * 60
                        },
                        cacheableResponse: {
                            statuses: [ 0, 200 ]
                        }
                    }
                }
            ]
        } )
    ]
};

module.exports = config;