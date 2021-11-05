module.exports = {
    context: __dirname,
    entry: './src/main.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
    },
};