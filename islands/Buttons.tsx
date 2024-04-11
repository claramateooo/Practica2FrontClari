export const SearchButton = () => {
    return (
        <button class="search-button" onClick={() => window.location.href = "/SPokemon"}>Búsqueda de Pokemon</button>
    );
}

export const  CreationButton = () => {
    return (
        <button class="creation-button" onClick={() => window.location.href = "/CPokemon"}>Creación de Un Pokemon</button>
    );
}