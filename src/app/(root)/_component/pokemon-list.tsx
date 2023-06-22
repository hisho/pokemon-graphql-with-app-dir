import { PokemonTag } from '@/feature/pokemon/pokemon-tag/pokemon-tag'
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
    <ul className={'grid grid-cols-3 gap-2'}>
      {pokemons?.map(
        (pokemon, index) =>
          pokemon && (
            <li key={`PokemonCard_${pokemon.id}_${index}`}>
              <Link
                className={
                  'hover:opacity-70 focus:opacity-70 transition-opacity'
                }
                href={`/${pokemon.name?.toLowerCase()}`}
              >
                <PokemonTag pokemon={pokemon} />
              </Link>
            </li>
          )
      )}
    </ul>
  )
}
