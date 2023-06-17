const buildValidations = require('./build-utils/build-validations')
const commonConfig = require('./build-utils/webpack.common')
const { merge } = require('webpack-merge')

// We can include Webpack plugins, through addons, that do
// not need to run every time we are developing.
// We will see an example when we set up 'Bundle Analyzer'
const addons = (/* string | string[] */ addonsArg: string | undefined) => {

  // Normalize array of addons (flatten)
  let addons = [...[addonsArg]]
    .filter(Boolean); // If addons is undefined, filter it out

  return addons.map(addonName =>
    require(`./build-utils/addons/webpack.${addonName}.ts`)
  )
}

// 'env' will contain the environment variable from 'scripts'
// section in 'package.json'.
// console.log(env); => { env: 'dev' }
module.exports = () => {
  const env =  process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
  // We use 'buildValidations' to check for the 'env' flag
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }
  // Select which Webpack configuration to use; development
  // or production
  // console.log(env.env); => dev
  const envConfig = require(`./build-utils/webpack.${env}.ts`);

  // 'webpack-merge' will combine our shared configurations, the
  // environment specific configurations and any addons we are
  // including
  const node_addons = process.env.NODE_ADDONS
  const mergedConfig = merge(
    commonConfig,
    envConfig,
    ...addons(node_addons)
  );

  // Then return the final configuration for Webpack
  return mergedConfig;
}
