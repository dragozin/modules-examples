import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://kp-graphql-api.unstable.kp.yandex.net/graphql/",
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
