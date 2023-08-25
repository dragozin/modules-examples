const NextFederationPlugin = require('@module-federation/nextjs-mf');
const withTranspileModules = require('next-transpile-modules');
const {withPlugins} = require('next-compose-plugins');

const modulesForTranspile = ['@kinopoisk-int/module-kit'];
const transpiledModules = withTranspileModules(modulesForTranspile);

const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'showcase',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          '.': './index',
        },
        //remotes: remotes(options.isServer),
        extraOptions:{
          exposePages: true
        }
      }),
    );

    return config;
  },
};

module.exports = withPlugins([transpiledModules],nextConfig);
