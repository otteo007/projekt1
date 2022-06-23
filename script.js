document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();           
}

  
function heldItems(heldItems) {
  helditems_list = "";
  for(let i = 0; i < heldItems.length; i++) 
  {

    if (i == heldItems.length -1)  
    {		
      

      helditems_list = helditems_list + " und " + heldItems[i].item.name;
      

    }
    else
    {

        if(i == 0) {
          helditems_list =  helditems_list + heldItems[i].item.name;
        } else {
          helditems_list =  helditems_list + ", " + heldItems[i].item.name;
        }
       
      
      
    }
    

  }
  return helditems_list;
 }


 function getmovescount(moves) {
    return moves.length;
 }


function abilities(abilities) {
  ability_list = "";
  for(let i = 0; i < abilities.length; i++) 
  {

    if (i == abilities.length -1)  
    {		
      

      ability_list = ability_list + " und " + abilities[i].ability.name;
      

    }
    else
    {

        if(i == 0) {
          ability_list =  ability_list + abilities[i].ability.name;
        } else {
          ability_list =  ability_list + ", " + abilities[i].ability.name;
        }
       
      
      
    }
    

  }
  return ability_list;
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
        <h1  align="center"><u>${capitalizeFirstLetter(data.name)}</u></h3>
        
        <p align="center"> Name: ${capitalizeFirstLetter(data.name)}</p>
        <p align="center"> Größe: ${data.height}</p>
        <p align="center"> Gewicht: ${data.weight}</p>
        <p align="center"> Items: ${heldItems(data.held_items)}</p>
        <p align="center"> Fähigkeiten: ${abilities(data.abilities)}
        <p align="center"> Anzahl der Attacken: ${getmovescount(data.moves)}</p>
        <p align="center"> Base-Erfahrung bei Besiegung: ${data.base_experience}</p>
        <p align="center"> ID: ${data.id}</p>

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

