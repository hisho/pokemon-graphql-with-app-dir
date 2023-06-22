import { graphql } from '@/lib/gql'
import { PokemonCard_PokemonFragment } from '@/lib/gql/graphql'
import Image from 'next/image'

export const PokemonCard_pokemon = graphql(`
  fragment PokemonCard_pokemon on Pokemon {
    name
    image
    evolutions {
      name
      image
      id
    }
  }
`)

type Props = {
  pokemon: PokemonCard_PokemonFragment
}

export const PokemonCard = ({ pokemon }: Props) => {
  console.log(pokemon.evolutions)
  return (
    <div>
      <header>
        <div className={'relative'} style={{ aspectRatio: 16 / 9 }}>
          {pokemon.image && (
            <Image
              alt={''}
              className={'object-contain'}
              fill
              src={pokemon.image}
            />
          )}
        </div>
      </header>
      <div>{pokemon.name}</div>
    </div>
  )
}
