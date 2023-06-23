import {
  PokemonTypeTag,
  PokemonTypeTag_pokemon,
} from '@/feature/pokemon/pokemon-type-tag/pokemon-type-tag'
import { FragmentType, graphql, useFragment } from '@/lib/gql'
import Image from 'next/image'

export const PokemonCard_pokemon = graphql(`
  fragment PokemonCard_pokemon on Pokemon {
    name
    image
    classification
    number
    ...PokemonTypeTag_pokemon
  }
`)

type Props = {
  pokemon: FragmentType<typeof PokemonCard_pokemon>
}

export const PokemonCard = (props: Props) => {
  const pokemon = useFragment(PokemonCard_pokemon, props.pokemon)
  const { types } = useFragment(PokemonTypeTag_pokemon, pokemon)
  return (
    <div className={'shadow'}>
      <header>
        <div className={'relative aspect-video'}>
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
      <div>
        <p>No.{pokemon.number?.padStart(4, '0')}</p>
        <h1>{pokemon.name}</h1>
        {types && (
          <ul className={'flex gap-1'}>
            {types.map((type, index) => (
              <li key={`${pokemon.number}_${type}_${index}`}>
                <PokemonTypeTag pokemon={pokemon} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
