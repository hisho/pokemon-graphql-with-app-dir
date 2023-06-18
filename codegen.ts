import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: 'src/**/*.tsx',
  generates: {
    './schema.graphql': {
      plugins: ['schema-ast'],
    },
    'src/lib/gql/': {
      plugins: [],
      preset: 'client',
    },
  },
  hooks: {
    afterAllFileWrite: ['eslint --fix && prettier --write'],
  },
  ignoreNoDocuments: true,
  overwrite: true,
  schema: 'https://graphql-pokemon2.vercel.app/',
}

export default config
