import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/src/setupTest.ts'],
};

export default config;
