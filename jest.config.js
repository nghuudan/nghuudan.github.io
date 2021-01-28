module.exports = {
  moduleNameMapper: {
    '\\.s?css$': '<rootDir>/styles-mock.js',
  },
  preset: 'ts-jest',
  roots: ['./src'],
  setupFilesAfterEnv: [
    './node_modules/@testing-library/jest-dom/extend-expect',
  ],
};
