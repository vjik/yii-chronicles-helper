const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, options) => {
    let config = {
        entry: {
            'main': __dirname + '/src/index.js',
        },
        output: {
            filename: 'main.js',
            path: __dirname + '/www/assets',
            clean: true,
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
            },
            modules: [__dirname + '/node_modules'],
        },
        module: {
            rules: [
                {
                    test: /\.js/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                },
                {
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.s[ca]ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        ],
        optimization: {},
    };

    if (options.mode === 'production') {
        config.optimization = {
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserJSPlugin({}),
            ],
        };
    }

    if (options.mode === 'development') {
        config.watch = true;
        config.watchOptions = {
            ignored: /node_modules/,
        };
    }

    return config;
};
