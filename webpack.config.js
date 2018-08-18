const {resolve}=require('path'),
    webpack=require('webpack')


module.exports={
    mode: 'development',
    entry:[
        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        "webpack/hot/only-dev-server",
        "./index.js",
    ],
    output: {
        filename: "bundle.js",
        path: resolve(__dirname,"dist"),
        publicPath: '/'
    },
    context: resolve(__dirname,"src"),
    devtool: "inline-source-map",
    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: resolve(__dirname, 'dist'),
        // match the output path

        publicPath: '/'
        // match the output `publicPath`
    },
    module:{
        rules: [
            {
                test:/\.js$/,
                use:[
                    'babel-loader'
                ],
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader',
                ],
            },
        ]
    },


    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
}