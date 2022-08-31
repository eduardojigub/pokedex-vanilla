// SELETORES JS

const getPokemonName = document.querySelector(".pokemon__name");
const getPokemonNumber = document.querySelector(".pokemon__number");
const getPokemonImage = document.querySelector(".pokemon__image");

const fetchPokemon = async (pokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  const data = await response.json();

  return data;
};

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);
  //adicionando o valor devolvido pela API ao DOM já guardando no seletor
  getPokemonName.innerHTML = data.name;
  getPokemonNumber.innerHTML = data.id;
  getPokemonImage.src =
    data.sprites.versions["generation-v"]["black-white"].animated.front_default;
};

renderPokemon("25");
