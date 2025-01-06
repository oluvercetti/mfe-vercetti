// Import required webpack plugins and configurations
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
    // Set mode to development for better debugging and development experience
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8081/',
    },

    // Development server configuration
    devServer: {
        // Set the port where the dev server will run
        port: 8081,

        // Handle client-side routing by redirecting all requests to index.html
        historyApiFallback: true,
    },

    // Webpack plugins configuration
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/marketing.js',
            },
            shared: packageJson.dependencies,
        }),
    ],
};

// Merge the common webpack config with development-specific settings
module.exports = merge(commonConfig, devConfig);
