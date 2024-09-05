const path = require('path');
const CracoAlias = require('craco-alias');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@components': resolve('src/components'),
          '@actions': resolve('src/redux/actions'),
          '@middlewares': resolve('src/redux/middlewares'),
          '@utils': resolve('src/utils'),
          '@helpers': resolve('src/helpers'),
          '@constants': resolve('src/constants'),
          '@containers': resolve('src/containers'),
          '@reducers': resolve('src/redux/reducers'),
          '@hooks': resolve('src/hooks'),
          '@selectors': resolve('src/redux/selectors'),
          '@api': resolve('src/api'),
          '@type': resolve('src/types'),
          '@validations': resolve('src/validations'),
        },
      },
    },
  ],
};
