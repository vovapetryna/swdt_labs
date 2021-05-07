exports.config = {
  framework: 'custom',
  seleniumAddress: 'http://192.168.0.109:4444/wd/hub',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  allScriptsTimeout: 10 * 60 * 1000,
  getPageTimeout: 30 * 1000,
  maxInstances: 1,
  capabilities: {
    'browserName': 'chrome'
  },
  getPageTimeout: 30000,
  specs: [
    './features/*.feature'
  ],
  cucumberOpts: {
    require: [
      './features/step_definitions/*_test.js'
    ]
  }
};