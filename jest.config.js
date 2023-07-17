module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest/setup-tests.js'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/jest/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^images/(.*)$': '<rootDir>/src/assets/images/$1',
    '^containers/(.*)$': '<rootDir>/src/containers/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^helpers/(.*)$': '<rootDir>/src/helpers/$1',
  },
};
