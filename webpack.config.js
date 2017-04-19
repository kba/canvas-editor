var webpack = require('webpack')

module.exports = {
    entry: "./main.js",
    devtool: 'source-map',
    node: { fs: 'empty' },
    output: {
        path: __dirname + "/dist",
        filename: "xrxeditor.js",
    },
    externals: {
        jquery: "$",
        bootstrap: 'bootstrap',
        // vue: 'vue',
        // vuex: 'vuex',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        loaders: [
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
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     exclude: /node_modules/
            // },
            {
                test: /\.s?css$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
            // {
            //     test: /\.html$/,
            //     loader: 'html-loader',
            // },
            {test: /(png|jpg|svg)$/i, loader: "url-loader"},
        ],
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env': {
            NODE_ENV: `"${process.env.NODE_ENV}"`,
        }})
    ]
}
