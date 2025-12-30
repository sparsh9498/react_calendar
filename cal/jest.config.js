module.exports = {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts",
        "!src/index.tsx",
        "!src/reportWebVitals.ts"
    ],
    coveragePathIgnorePatterns: [
      "<rootDir>/src/index.tsx",
      "<rootDir>/src/reportWebVitals.ts",
      "<rootDir>/src/types.ts",
      "<rootDir>/src/config/"
    ],
    coverageReporters: ["text", "lcov"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
