module.exports = {
  // next运行时的env
  env: {
    customKey: 'my-value',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.ts?$/,
      use: [
        {
          loader: 'ts-loader',
        },
      ],
    })
    return config
  },
}
