// Import required webpack plugins and configurations
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
    // Set mode to development for better debugging and development experience
    mode: 'development',

    // Development server configuration
    devServer: {
        // Set the port where the dev server will run
        port: 8081,

        // Handle client-side routing by redirecting all requests to index.html
        historyApiFallback: {
            index: 'index.html',
        },
    },

    // Webpack plugins configuration
    plugins: [
        // Generate an HTML file with the bundled JavaScript automatically injected
        new HtmlWebpackPlugin({
            // Use this HTML file as a template
            template: './public/index.html',
        }),
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
