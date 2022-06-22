document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Name des Pokemons"
        />
      </div>
      <div class="pokemonInfos">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <p>Weight: ${data.weight}</p>
        <p>Größe: ${data.height}</p>
<<<<<<< HEAD
        <p>URL: ${data.url}</p>
=======
        <p>Ability: ${data.slot}</p>
        <p>rarity: ${data.rarity}</p>
>>>>>>> db5c27f9ff45d1a59df4676110f1cb30d6e7d6de
      </div>`;
    })
    .catch((err) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <h4>Pokemon nicht gefunden 😞</h4>
      `;
      console.log("Pokemon nicht gefunden", err);
    });

  e.preventDefault();
}

