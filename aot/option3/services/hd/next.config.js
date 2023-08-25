/** @type {import('next').NextConfig} */

const withTranspileModules = require('next-transpile-modules');
const {withPlugins} = require('next-compose-plugins');

const modulesForTranspile = ['@kp-modules/showcase', '@kinopoisk-int/module-kit'];

const transpiledModules = withTranspileModules(modulesForTranspile);

const nextConfig = {}

module.exports = withPlugins([transpiledModules],nextConfig)
