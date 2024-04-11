import { FunctionComponent } from "preact";
import { Pokemon } from "../Pokemon.ts";
import { PageProps } from "$fresh/server.ts";

type PokemonPageProps = {
  pokemon: Pokemon[];
};


const PokemonPage = (props: PageProps<PokemonPageProps>) => {
  const { pokemon } = props.data;

  return (
    <div className="pokemon-details">
      <h1 className="pokemon-name">Detalles de {pokemon[0].name}</h1>
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
