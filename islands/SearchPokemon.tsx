import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { JSX } from "preact";
import { Pokemon } from "../Pokemon.ts";

const SearchPokemon: FunctionComponent = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [name, setName] = useState("");

  const buscar = async (e: JSX.TargetedEvent<HTMLFormElement, Event>, name: string) => {
    e.preventDefault();
    const response = await fetch(`/api/${name}`, { method: "GET" });
    const pokeKlk = await response.json();
    setPokemon(pokeKlk);
  };

  return (
    <section>
      <div class="search-container">
        <h1 class="title">Buscar Pokemon</h1>
        <form method="GET" onSubmit={(e) => buscar(e, name)} class="search-form">
          <div class="form">
          <label for="search-input" class="search-label">Introduce el nombre:</label>
    <div class="input-container">
      <input id="search-input" type="text" value={name} name="name" placeholder="Nombre" onInput={(e) => setName(e.currentTarget.value)} class="search-input" />
      <button type="submit" class="search-button">Buscar</button>
    </div>
  </div>
</form>
      </div>
      <div class="pokemon-list">
        {pokemon.map((pokemon) => (
          <a class="characterContainer" href={`/Pokemonn/${pokemon.name}`}>
            <h2 class="text-overflow">{pokemon.name}</h2>
            <img class="pokemon-image" src={pokemon.image} alt={pokemon.name} />
            <audio class="audio-player" controls>
              <source src={pokemon.sound} type="audio/mpeg" />
            </audio>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SearchPokemon;
