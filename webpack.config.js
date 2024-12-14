const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist',
        host: '0.0.0.0',
        port: 8080,
        open: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i, // Target .css files
                use: ['style-loader', 'css-loader'], // Use these loaders
            },
        ],
    },
};