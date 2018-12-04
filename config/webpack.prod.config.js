const UglifyJsWebpackPlugin = require( 'uglifyjs-webpack-plugin' );
const S3Plugin = require( "webpack-s3-plugin" );
const webpack = require( 'webpack' );

const config = {
    devtool: 'source-map',
    plugins: [
        new UglifyJsWebpackPlugin( {
            sourceMap: true
        } ),
        new webpack.DefinePlugin( {
            'process.env.NODE_ENV': JSON.stringify( "production" )
        } ),
        new S3Plugin( {
            // Exclude uploading of html
            include: /.*\.(css|js|html)/,
            // s3Options are required
            s3Options: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: 'us-east-1'
            },
            s3UploadOptions: {
                Bucket: "www.deepmapper.com",
                ContentType( fileName ) {

                    if ( /\.js/.test( fileName ) ) {

                        return "application/javascript";

                    } else if ( /\.css/.test( fileName ) ) {

                        return "text/css";

                    } else if ( /\.html/.test( fileName ) ) {

                        return "text/html";

                    } else {

                        return "text/plain";

                    }

                }

            }

        } )

    ]

};

module.exports = config;