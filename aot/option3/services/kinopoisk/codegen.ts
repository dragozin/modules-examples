import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql.kinopoisk.ru/graphql/",
  documents: ["./src/**/graphql/**/*.graphql"],
  generates: {
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        folder: 'documents',
        extension: '.ts',
    }
    },
  }
};

export default config;
