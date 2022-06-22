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
        <div class="pokemonIcon">
          <img
            src="${data.sprites.other["official-artwork"].front_default}"
            alt="Name des Pokemons"
          />
        </div>
        <div class="pokemonInfos">
          <h1>${capitalizeFirstLetter(data.name)}</h3>
          <p>Gewichtö: ${data.weight}</p>
          <p>Größe: ${data.height}</p>

          <p>URL: ${data.url}</p>
      <p>Ability: ${data.slot}</p>
          <p>rarity: ${data.rarity}</p>
 
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

