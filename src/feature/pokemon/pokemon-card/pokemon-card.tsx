import { graphql } from '@/lib/gql'
import { PokemonCard_PokemonFragment } from '@/lib/gql/graphql'

export const PokemonCard_pokemon = graphql(`
  fragment PokemonCard_pokemon on Pokemon {
    name
  }
`)

type Props = {
  pokemon: PokemonCard_PokemonFragment
}

export const PokemonCard = ({ pokemon }: Props) => {
  return <div>{pokemon.name}</div>
}
