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
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/*.config.js",
    "!**/.next/**/*",
    "!**/_next/**/*",
    "!**/coverage/**/*",
    "!.eslintrc.js",
    "!next-env.d.ts",
    "!src/calculations/**/index.ts",
    "!src/calculations/**/types.ts",
    "!**/_app.tsx",
    "!**/_document.tsx",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
