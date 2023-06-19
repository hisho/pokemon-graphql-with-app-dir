import type { RequestConfig } from 'graphql-request/src/types'

import { env } from '@/constant/env'
import { GraphQLClient } from 'graphql-request'

export const createGraphQLClient = (options?: RequestConfig) =>
  new GraphQLClient(env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, options)
