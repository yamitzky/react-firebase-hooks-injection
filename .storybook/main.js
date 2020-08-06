const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    config.resolve.alias['~/src'] = path.resolve(__dirname, '../src')
    return config
  },
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
}
