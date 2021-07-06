const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    excludeChunks: ["server"]
});

module.exports = {
    watch: false,
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'web',
    devtool: 'source-map',
    module: {
        // Need this to avoid error when working with Express
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                // Loads the javacript into html template provided.
                // Entry point is set below in HtmlWebPackPlugin in Plugins 
                test: /\.html$/,
                use: [{ loader: "html-loader" }]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [{
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader"
                    }

                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader', ],

            },
        ]
    },
    plugins: [
        htmlWebpackPlugin
    ],
};