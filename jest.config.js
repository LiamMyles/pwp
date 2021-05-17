module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setup-tests.js"],
  transform: { "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest" },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^Components(.*)$": "<rootDir>/src/components$1",
    "^Pages(.*)$": "<rootDir>/src/pages$1",
    "^Calculations(.*)$": "<rootDir>/src/calculations$1",
    "^Src(.*)$": "<rootDir>/src$1",
  },
}
