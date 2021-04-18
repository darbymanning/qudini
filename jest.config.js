module.exports = {
  moduleFileExtensions: ["js", "mjs", "svelte"],
  moduleDirectories: ["node_modules", "src/node_modules"],
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
    "<rootDir>/src/node_modules/(?!@sapper)",
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }],
  },
  transformIgnorePatterns: ["src/node_modules/(?!@sapper)"],
};
