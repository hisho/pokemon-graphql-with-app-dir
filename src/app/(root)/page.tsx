import { PokemonList } from '@/app/(root)/_component/pokemon-list'
import { Suspense } from 'react'

export default async function () {
  return (
    <div className={'max-w-4xl mx-auto'}>
      <Suspense fallback={<div>loading...</div>}>
        <PokemonList />
      </Suspense>
    </div>
  )
}
