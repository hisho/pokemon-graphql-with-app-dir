import { PokemonCard } from '@/feature/pokemon/pokemon-card/pokemon-card'
import { graphql } from '@/lib/gql'
import { createGraphQLClient } from '@/lib/graphql/createGraphQLClient'

const PokemonDetailDocument = graphql(`
  query PokemonDetailQuery($name: String) {
    pokemon(name: $name) {
      ...PokemonCard_pokemon
    }
  }
`)

type Props = {
  params: {
    pokemonName: string
  }
}

export default async function ({ params }: Props) {
  const { pokemon } = await createGraphQLClient().request(
    PokemonDetailDocument,
    {
      name: params.pokemonName.toLowerCase(),
    }
  )

  return <div>{pokemon && <PokemonCard pokemon={pokemon} />}</div>
}
