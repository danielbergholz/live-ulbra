import { useState, useEffect } from 'react'
import axios from 'axios'

import Pokemon from '../../components/Pokemon'

interface IPokemon {
  url: string
  name: string
}

function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>()

  const getAllPokemons = async () => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')

    setPokemons(data.results)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div>
      <h1>Site topzera com reactttt</h1>

      {pokemons?.map((pokemon) => (
        <Pokemon name={pokemon.name} key={pokemon.name} />
      ))}
    </div>
  )
}

export default Home
