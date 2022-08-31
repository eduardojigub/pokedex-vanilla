// SELETORES JS

const getPokemonName = document.querySelector(".pokemon__name");
const getPokemonNumber = document.querySelector(".pokemon__number");
const getPokemonImage = document.querySelector(".pokemon__image");
const getForm = document.querySelector(".form");
const input = document.querySelector(".input__search");

const fetchPokemon = async (pokemon) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
};

const renderPokemon = async (pokemon) => {
  getPokemonName.innerHTML = "Loading...";
  getPokemonNumber.innerHTML = "";
  const data = await fetchPokemon(pokemon);
  //adicionando o valor devolvido pela API ao DOM já guardando no seletor
  if (data) {
    getPokemonName.innerHTML = data.name;
    getPokemonNumber.innerHTML = data.id;
    getPokemonImage.src =
      data.sprites.versions["generation-v"][
        "black-white"
      ].animated.front_default;
    input.value = "";
  } else {
    getPokemonImage.style.display = "none";
    getPokemonName.innerHTML = "Poke not found";
    getPokemonNumber.innerHTML = "";
  }
};

getForm.addEventListener("submit", (event) => {
  event.preventDefault();

  renderPokemon(input.value);
});

renderPokemon("1");
