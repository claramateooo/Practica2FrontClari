import { FunctionComponent } from "preact";
import CreatePokemonForm from "../islands/CreatePokemonForm.tsx";
import { CrearPokemonFormProps } from "../islands/CreatePokemonForm.tsx";

const ListPokemons: FunctionComponent = () => {
  // Define la función onSubmit
  const handleSubmit: CrearPokemonFormProps["onSubmit"] = (pokemonData) => {
    // Aquí puedes manejar la lógica para enviar los datos del nuevo Pokémon
    console.log("Nuevo Pokémon creado:", pokemonData);
  };

  return (
    <div class="pokemon-creator">
    <div class="pokemon-creator-header">
      <h1 class="pokemon-creator-title">¡Aquí se crean pokémones!</h1>
        {/* Pasa la función onSubmit al componente CreatePokemonForm */}
        <CreatePokemonForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default ListPokemons;
