module.exports = {
  moduleFileExtensions: ["js", "svelte"],
  moduleNameMapper: {
    "^\\$(.*)$": "<rootDir>/src/$1",
  },
  resetMocks: true,
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js",
    "@testing-library/jest-dom/extend-expect",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/__sapper__/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/node_modules/",
  ],
  transform: {
    "^.+\\.js$": ["babel-jest"],
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }],
  },
};
