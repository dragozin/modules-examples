import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://kp-graphql-api.unstable.kp.yandex.net/graphql/",
  documents: ["./src/**/graphql/**/*.graphql"],
  generates: {
    './src/models.ts': {
      plugins: ['typescript'],
      config: {preResolveTypes: true, onlyOperationTypes: true}
    },
    './src/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'models.ts'
      },
      plugins: ['typescript-operations', 'typed-document-node'],
      config: {preResolveTypes: true, onlyOperationTypes: true}
    }

  },
};

export default config;
