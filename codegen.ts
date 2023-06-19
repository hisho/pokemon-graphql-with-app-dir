import type { CodegenConfig } from '@graphql-codegen/cli'

import { env } from '@/constant/env'

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
  schema: env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
}

export default config
