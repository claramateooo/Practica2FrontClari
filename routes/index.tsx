
import Axios from "npm:axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Pokemon } from "../Pokemon.ts";
import { SearchButton } from "../islands/Buttons.tsx";
import { CreationButton } from "../islands/Buttons.tsx";


type Data = { results: Pokemon[] };

export const handler: Handlers<Data> = {
  async GET(_req: Request, ctx: FreshContext<unknown, Data>) {
    
    const response = await Axios.get<Pokemon[]>("https://lospoquimones.deno.dev");

    if (response.status !== 200) {
      console.error(
        "Error al obtener los Pokémon",
        response.status,
        response.statusText,
      );
      throw new Error("Error al obtener los Pokémon");
    }

    return ctx.render({ results: response.data });
  },
};
const HomePage = (props: PageProps<Data>) => {
  const { results } = props.data;

  return (
    <div>
      <SearchButton></SearchButton> <CreationButton></CreationButton>
      <h1 className="title">Lista de Pokémon</h1>
      <div className="pokemon-list">
        {results.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-container">
            <strong className="name">Nombre:</strong> <a href={`/Pokemonn/${pokemon.name}`} className="name">{pokemon.name}</a><br />
            <img src={pokemon.image} alt={pokemon.name} /><br />
            <audio controls>
              <source src={pokemon.sound} type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio><br />
            <strong className="creator">Creador:</strong> {pokemon.creator}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

