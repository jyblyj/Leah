const path = require('path');

const config = {
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            utils: path.resolve(__dirname, 'src/utils'),
            actions: path.resolve(__dirname, 'src/actions'),
            env: path.resolve(__dirname, 'src/env'),
            apis: path.resolve(__dirname, 'src/apis'),
            pages: path.resolve(__dirname, 'src/pages'),
            assets: path.resolve(__dirname, 'src/assets'),
            packageOrder: path.resolve(__dirname, 'src/packageOrder'),
            packageSetting: path.resolve(__dirname, 'src/packageSetting'),
            packageShop: path.resolve(__dirname, 'src/packageShop'),
            constant: path.resolve(__dirname, 'src/constant'),
        },
    },
};

module.exports = config;
