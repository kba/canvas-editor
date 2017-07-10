var webpack = require('webpack')

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "xrx-vue.js",
        library: 'XrxVue',
        libraryTarget: 'umd',
    },
    externals: {
        jquery: "$",
        bootstrap: 'bootstrap',
        'vue/dist/vue.esm.js': 'Vue',
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
