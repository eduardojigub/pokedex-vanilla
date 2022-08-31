// SELETORES JS

const getPokemonName = document.querySelector(".pokemon__name");

const fetchPokemon = async (pokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  const data = await response.json();

  return data;
};

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);

  getPokemonName.innerHTML = data.name; //adicionando o valor devolvido pela API ao DOM já guardando no seletor
};

renderPokemon("6");
