import { PokemonTag } from '@/feature/pokemon/pokemon-tag/pokemon-card'
import { graphql } from '@/lib/gql'
import { createGraphQLClient } from '@/lib/graphql/createGraphQLClient'
import Link from 'next/link'

const PokemonListDocument = graphql(`
  query PokemonListQuery {
    pokemons(first: 151) {
      id
      name
      ...PokemonTag_pokemon
    }
  }
`)

export const PokemonList = async () => {
  const { pokemons } = await createGraphQLClient().request(PokemonListDocument)

  return (
    <ul>
      {pokemons?.map(
        (pokemon, index) =>
          pokemon && (
            <li key={`PokemonCard_${pokemon.id}_${index}`}>
              <Link href={`/${pokemon.name}`}>
                <PokemonTag pokemon={pokemon} />
              </Link>
            </li>
          )
      )}
    </ul>
  )
}
