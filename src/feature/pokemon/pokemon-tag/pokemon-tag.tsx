import { FragmentType, graphql, useFragment } from '@/lib/gql'
import Image from 'next/image'

export const PokemonTag_pokemon = graphql(`
  fragment PokemonTag_pokemon on Pokemon {
    name
    image
  }
`)

type Props = {
  pokemon: FragmentType<typeof PokemonTag_pokemon>
}

export const PokemonTag = (props: Props) => {
  const pokemon = useFragment(PokemonTag_pokemon, props.pokemon)

  return (
    <div className={'flex bg-gray-100 shadow items-center gap-2 px-2 py-1'}>
      <div className={'flex-shrink-0 w-4 h-4 relative aspect-square'}>
        {pokemon.image && (
          <Image
            alt={''}
            className={'object-contain object-center mix-blend-darken'}
            fill
            src={pokemon.image}
          />
        )}
      </div>
      <div>{pokemon.name}</div>
    </div>
  )
}
