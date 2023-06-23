/* eslint-disable */
import * as types from './graphql'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query PokemonDetailQuery($name: String) {\n    pokemon(name: $name) {\n      ...PokemonCard_pokemon\n    }\n  }\n':
    types.PokemonDetailQueryDocument,
  '\n  query PokemonListQuery {\n    pokemons(first: 151) {\n      id\n      name\n      ...PokemonTag_pokemon\n    }\n  }\n':
    types.PokemonListQueryDocument,
  '\n  fragment PokemonCard_pokemon on Pokemon {\n    name\n    image\n    classification\n    number\n    ...PokemonTypeTag_pokemon\n  }\n':
    types.PokemonCard_PokemonFragmentDoc,
  '\n  fragment PokemonTag_pokemon on Pokemon {\n    name\n    image\n  }\n':
    types.PokemonTag_PokemonFragmentDoc,
  '\n  fragment PokemonTypeTag_pokemon on Pokemon {\n    types\n  }\n':
    types.PokemonTypeTag_PokemonFragmentDoc,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PokemonDetailQuery($name: String) {\n    pokemon(name: $name) {\n      ...PokemonCard_pokemon\n    }\n  }\n'
): (typeof documents)['\n  query PokemonDetailQuery($name: String) {\n    pokemon(name: $name) {\n      ...PokemonCard_pokemon\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PokemonListQuery {\n    pokemons(first: 151) {\n      id\n      name\n      ...PokemonTag_pokemon\n    }\n  }\n'
): (typeof documents)['\n  query PokemonListQuery {\n    pokemons(first: 151) {\n      id\n      name\n      ...PokemonTag_pokemon\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PokemonCard_pokemon on Pokemon {\n    name\n    image\n    classification\n    number\n    ...PokemonTypeTag_pokemon\n  }\n'
): (typeof documents)['\n  fragment PokemonCard_pokemon on Pokemon {\n    name\n    image\n    classification\n    number\n    ...PokemonTypeTag_pokemon\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PokemonTag_pokemon on Pokemon {\n    name\n    image\n  }\n'
): (typeof documents)['\n  fragment PokemonTag_pokemon on Pokemon {\n    name\n    image\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PokemonTypeTag_pokemon on Pokemon {\n    types\n  }\n'
): (typeof documents)['\n  fragment PokemonTypeTag_pokemon on Pokemon {\n    types\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
