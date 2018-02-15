module.exports = {
  globals: {
    "ts-jest": {
      useBabelrc: true
    }
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFiles: ['<rootDir>/jest.setup.ts'],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"]
};
