import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Pokemon } from "../../Pokemon.ts";


type PokemonPageData = {
  pokemon: Pokemon[];
};


export const handler: Handlers<PokemonPageData> = {
  async GET(req: Request, ctx: FreshContext<unknown, PokemonPageData>) {
   
    const { name } = ctx.params;

    try {
     
      const response = await Axios.get<Pokemon[]>(
        `https://lospoquimones.deno.dev/${name}`
      );

      if (response.status !== 200) {
        console.error(
          "Error al obtener los detalles del Pokémon",
          response.status,
          response.statusText
        );
        throw new Error("Error al obtener los detalles del Pokémon");
      }

   
      console.log(response.data);
      return ctx.render({ pokemon: response.data });
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
      throw new Error("Ha ocurrido un error al obtener los detalles del Pokémon");
    }
  },
};


const PokemonPage = (props: PageProps<PokemonPageData>) => {
    const { pokemon } = props.data;
  
    return (
      <div className="pokemon-details">
        <h1 className="pokemon-name">Detalles del fucking {pokemon[0].name}</h1>
        <div className="pokemon-info">
          <img src={pokemon[0].image} alt={pokemon[0].name} className="pokemon-image" />
          <div className="pokemon-details-container">
            <p><strong>Nombre:</strong> {pokemon[0].name}</p>
            <p><strong>Imagen:</strong> <img src={pokemon[0].image} alt={pokemon[0].name} className="pokemon-detail-image" /></p>
            <p><strong>Sonido:</strong> <audio controls><source src={pokemon[0].sound} type="audio/mpeg" />Tu navegador no soporta el elemento de audio.</audio></p>
            <p><strong>Creador:</strong> {pokemon[0].creator}</p>
          </div>
        </div>
      </div>
    );
  };
export default PokemonPage;
