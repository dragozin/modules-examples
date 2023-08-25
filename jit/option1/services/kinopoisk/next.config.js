const NextFederationPlugin = require('@module-federation/nextjs-mf');


const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    showcase: `showcase@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
};


module.exports = {
  serverRuntimeConfig: {
      secret: 'helloWorld',
  },
  webpack(config, options) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'kinopoisk',
          remotes: remotes(options.isServer),
          filename: 'static/chunks/remoteEntry.js',
        }),
      );
  
      return config;
  },
}
