import { FunctionComponent } from "preact";
import { Pokemon } from "../Pokemon.ts";
import { useEffect, useState } from "preact/hooks";

const ListPokemons: FunctionComponent = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  useEffect(() => {
    const PpokeLst = async () => {
      const response = await fetch("/api/API", {
        method: "GET"
      });
      const pokeL = await response.json();
      setPokemonList(pokeL)
    }
    PpokeLst()
  }, [])

  return (
    <div class="pokemon-list">
      {pokemonList.map((pokemon) => (
        <a class="pokemon-container" href={`/Pokemonn/${pokemon.name}`}>
          <h2 class="pokemon-name">{pokemon.name}</h2>
          <img class="pokemon-image" src={pokemon.image} alt={pokemon.name}/>
          <audio class="pokemon-audio" controls>
            <source src={pokemon.sound} type="audio/mpeg"/>
          </audio>
        </a>
      ))}
    </div>
);

};

export default ListPokemons;