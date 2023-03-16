import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/src/setupTest.ts'],
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    },
};

export default config;
