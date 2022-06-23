document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();           
}

function heldItems(heldItems) {



    for(let i = 0; i < heldItems.length; i++) {
     var helditems_List =  heldItems[0].item.name
    }
    return helditems_List;
    
  

}

function abilities(abilities) {
  for(let i = 0; i < abilities.length; i++) {
    return abilities[i].ability.name;
    
  }
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
        <h1><u>${capitalizeFirstLetter(data.name)}</u></h3>
        
        <p>Das Pokemon hält folgendes item: ${heldItems(data.held_items)}.  ${capitalizeFirstLetter(data.name)} ist ein Pokémon mit einem Gewicht von ${data.weight}. Außerdem hat es eine Höhe von ${data.height}.
        Das Pokémon hat die ID ${data.id}. Die Base xp die mann bekommt wenn man ${capitalizeFirstLetter(data.name)} besiegt sind ${data.base_experience}. Das Pokemon hat folgende abilities: ${abilities(data.abilities)}.</p>

        
        

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

