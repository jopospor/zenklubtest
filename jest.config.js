module.exports = {
  bail: 20,
  preset: "jest-puppeteer",
  testRunner: "jest-jasmine2",
  setupFilesAfterEnv: ["./jest.setup.js", "jest-puppeteer-allure/src/registerAllureReporter"]
};
