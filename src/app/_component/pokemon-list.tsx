import { PokemonCard } from '@/feature/pokemon/pokemon-card/pokemon-card'
import { graphql } from '@/lib/gql'
import { createGraphQLClient } from '@/lib/graphql/createGraphQLClient'

const PokemonListDocument = graphql(`
  query PokemonListQuery {
    pokemons(first: 999) {
      id
      ...PokemonCard_pokemon
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
              <PokemonCard pokemon={pokemon} />
            </li>
          )
      )}
    </ul>
  )
}
