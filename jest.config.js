module.exports = {
  moduleDirectories: ["node_modules", "."],
  moduleFileExtensions: ["js", "svelte"],
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
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": "svelte-jester",
  },
};
