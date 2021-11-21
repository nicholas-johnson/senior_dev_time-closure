module.exports = {
    context: __dirname,
    entry: './src/main.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader?cacheDirectory=true',
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        },]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};