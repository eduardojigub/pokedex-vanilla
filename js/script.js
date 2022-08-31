const fetchPokemon = async (pokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  const data = await response.json();

  return data;
};

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);
};
