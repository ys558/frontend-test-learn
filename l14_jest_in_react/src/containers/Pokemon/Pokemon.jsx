import React, {useState, useEffect} from 'react'

export default function Pokemon() {
  const { pokemon, isLoading, error } = usePokemon('pikachu')
  if(isLoading) return <>Loading...</>
  if(error) return <>Network error</>
  return (
    <>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
      <h2>{pokemon.species.name}</h2>
    </>
  )
}

export const usePokemon = (pokemonName) => {
  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const json = await response.json()
        setPokemon(json)
      }catch (e){
        setError(e)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [pokemonName])
  return { pokemon, error, isLoading }
}