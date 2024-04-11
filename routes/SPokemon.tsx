import { FunctionComponent } from "preact";
import SearchPokemon from "../islands/SearchPokemon.tsx";

const ListPokemons: FunctionComponent = () => {  
  return (
    <div class="pokemon-list">
      <SearchPokemon/>
    </div>
  );
}

export default ListPokemons;
