var webpack = require('webpack')

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "xrx-vue.js",
        libraryTarget: 'umd',
    },
    externals: {
        jquery: "$",
        bootstrap: 'bootstrap',
        vue: 'Vue',
        'semtonotes-client': 'xrx',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                        html: 'vue-html-loader?attrs=img:src',
                    }
                },
            },
            {
                test: /\.s?css$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
            {test: /(png|jpg|svg)$/i, loader: "url-loader"},
        ],
    }
}
