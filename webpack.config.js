const path = require("path");

module.exports = {
    context: __dirname,
    entry: "./frontend/giftsy_redux.jsx",
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".jsx", ".js", "*"]
    }
};
