// SELETORES JS

const getPokemonName = document.querySelector(".pokemon__name");
const getPokemonNumber = document.querySelector(".pokemon__number");
const getPokemonImage = document.querySelector(".pokemon__image");
const getForm = document.querySelector(".form");
const input = document.querySelector(".input__search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

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
    getPokemonImage.style.display = "block";
    getPokemonName.innerHTML = data.name;
    getPokemonNumber.innerHTML = data.id;
    getPokemonImage.src =
      data.sprites.versions["generation-v"][
        "black-white"
      ].animated.front_default;
    input.value = "";
    searchPokemon = data.id;
  } else {
    getPokemonImage.style.display = "none";
    getPokemonName.innerHTML = "Poke not found";
    getPokemonNumber.innerHTML = "";
  }
};

getForm.addEventListener("submit", (event) => {
  event.preventDefault();

  renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener("click", () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon("1");
