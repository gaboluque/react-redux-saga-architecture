const {
  override,
  fixBabelImports,
  addLessLoader,
  useEslintRc,
  useBabelRc,
} = require('customize-cra');
const antdOverrides = require('./antd-overrides.js');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: antdOverrides,
    },
  }),
  useEslintRc('.eslintrc.json'),
  useBabelRc('.babelrc.json')
);
