import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'http://localhost:8000/graphql',
    documents: ['src/**/*.svelte', 'src/**/*.ts'],
    ignoreNoDocuments: true,
    generates: {
        './src/lib/graphql/': { // Folder to store downloaded GrapqhQL Schema.
            preset: 'client',
            plugins: [],
        },
    },
};

export default config;