import type { CodegenConfig } from '@graphql-codegen/cli'

import 'dotenv/config'
import { z } from 'zod'

const schema = z.string().min(1)

const config: CodegenConfig = {
  documents: 'src/**/*.tsx',
  generates: {
    './schema.graphql': {
      plugins: ['schema-ast'],
    },
    'src/lib/gql/': {
      config: {
        defaultScalarType: 'unknown',
        enumsAsConst: true,
        exactOptionalPropertyTypes: true,
        immutableTypes: true,
        scalars: {
          DateTime: 'string',
          createdAt: 'string',
          updatedAt: 'string',
        },
        strictScalars: true,
        useTypeImports: true,
      },
      plugins: [],
      preset: 'client',
    },
  },
  hooks: {
    afterAllFileWrite: ['eslint --fix && prettier --write'],
  },
  ignoreNoDocuments: true,
  overwrite: true,
  schema: schema.parse(process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT']),
}

export default config
