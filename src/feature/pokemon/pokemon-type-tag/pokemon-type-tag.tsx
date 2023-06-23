import { FragmentType, graphql, useFragment } from '@/lib/gql'
export const PokemonTypeTag_pokemon = graphql(`
  fragment PokemonTypeTag_pokemon on Pokemon {
    types
  }
`)

type Props = {
  pokemon: FragmentType<typeof PokemonTypeTag_pokemon>
}

export const PokemonTypeTag = (props: Props) => {
  const pokemon = useFragment(PokemonTypeTag_pokemon, props.pokemon)

  return <div>{pokemon.types}</div>
}
