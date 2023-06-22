import { graphql } from '@/lib/gql'
import { PokemonCard_PokemonFragment } from '@/lib/gql/graphql'

export const PokemonTag_pokemon = graphql(`
  fragment PokemonTag_pokemon on Pokemon {
    name
  }
`)

type Props = {
  pokemon: PokemonCard_PokemonFragment
}

export const PokemonTag = ({ pokemon }: Props) => {
  return <div>{pokemon.name}</div>
}
