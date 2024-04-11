
import { FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";

export type CrearPokemonFormProps = {
  onSubmit: (pokemonData: { name: string; image: string; sound: string; creator: string }) => void;
};

const CreatePokemonForm: FunctionComponent<CrearPokemonFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [sound, setSound] = useState("");
  const [creator, setCreator] = useState("");

  const handleSubmit = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    onSubmit({ name, image, sound, creator });
  };

  return (
    <form onSubmit={handleSubmit} class="create-pokemon-form">
      <div class="form-group">
        <label htmlFor="name" class="form-label">Nombre:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.currentTarget.value)} required class="form-input" />
      </div>
      <div class="form-group">
        <label htmlFor="image" class="form-label">URL de la imagen:</label>
        <input type="url" id="image" value={image} onChange={(e) => setImage(e.currentTarget.value)} required class="form-input" />
      </div>
      <div class="form-group">
        <label htmlFor="sound" class="form-label">URL del sonido:</label>
        <input type="url" id="sound" value={sound} onChange={(e) => setSound(e.currentTarget.value)} required class="form-input" />
      </div>
      <div class="form-group">
        <label htmlFor="creator" class="form-label">Creador:</label>
        <input type="text" id="creator" value={creator} onChange={(e) => setCreator(e.currentTarget.value)} required class="form-input" />
      </div>
      <button type="submit" class="form-button">Crear Pokémon</button>
    </form>
  );
  
};

export default CreatePokemonForm;
