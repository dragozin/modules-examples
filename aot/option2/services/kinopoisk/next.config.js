/** @type {import('next').NextConfig} */

const withTranspileModules = require('next-transpile-modules');
const {withPlugins} = require('next-compose-plugins');


const modulesForTranspile = ['@kp-modules/showcase', '@kinopoisk-int/module-kit', '@kinopoisk-int/kp-isolated-router'];

const transpiledModules = withTranspileModules(modulesForTranspile);

const nextConfig = {
    serverRuntimeConfig: {
        secret: 'helloWorld',
    }
}

module.exports = withPlugins([transpiledModules],nextConfig)
