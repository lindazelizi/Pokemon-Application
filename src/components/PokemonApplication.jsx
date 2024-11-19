import React, { useEffect, useState } from 'react'
import Pokemon from "./Pokemon"

function PokemonApplication() {
    const [PokemonList, setPokemonList] = useState([])
    const [SelectPokemon, setSelectPokemon] = useState("")
    const [SelectedPokemonData, setSelectedPokemonData] = useState(null)
    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.json())
        .then((data) => setPokemonList(data.results))
        .catch((error) => console.error("errorPokemonList:",error))

    }, [])

    const fetchPokemon = () => {
        if(SelectPokemon){
            fetch(SelectPokemon)
            .then((response) => response.json())
            .then((data) => setSelectedPokemonData(data))
            .catch((error) => console.error("errorPokemon:",error))
        }
    }

      console.log(PokemonList)
  return (
    <>
    <h1>PokemonApplication</h1>
    <div>
        <select 
        onChange={(e) => setSelectPokemon(e.target.value)}
        defaultValue=""><option value= "" disabled> Välj Pokemon</option> 
        {PokemonList.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.url}>
              {pokemon.name}
            </option>
          ))}
        </select>
        <button onClick={fetchPokemon}>Hämta Pokemon</button>
    </div>
    {SelectedPokemonData ? <Pokemon data = {SelectedPokemonData}/>: "" }
    </>
  )
}

export default PokemonApplication