const pokeData = POKEMON.pokemon;
let list = [];
pokeData.forEach(element => {
    let pokeList =
      "<div class='pokemonScreen'>" + " <img src='" + element.img + "'/>" +
      "<br>" + element.num + "<br> " + element.name + "</div>";
    list += pokeList;
  });

function viewPokemon(pokemon) {
    document.getElementById("pokeList").innerHTML = "";
    pokemon.forEach(element => {
        console.log(element.name, element.type);
        document.getElementById("pokeList").innerHTML += "<div id= 'listFil' class ='pokemonScreen'>" + "<img src = '" + element.img + "' />" + " " + element.name + " " + element.num + "</div>";

    });
}


function filterType(condition) {
    const filterCond = pokeData.filter(pokemon => (pokemon.type[0] == condition || pokemon.type[1] == condition));
    viewPokemon(filterCond);
    orderAZ();
    orderZA();
}

function filterTypeCount(condition) {
    return filterCond = pokeData.filter(pokemon => (pokemon.type[0] == condition || pokemon.type[1] == condition)).length;
}

function orderAZ() {
    let pokeD = pokeData.sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      });
    
      viewPokemon(pokeD);
    }

function orderZA() {

    let pokeD = pokeData.sort(function(a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
      });
      viewPokemon(pokeD);
    }

/*function porcentajePorTipo() {
    let tipos = ["Water", "Fire", "Grass", "Ground", "Rock", "Steel", "Ice", "Electric", "Dragon", "Ghost", "Psychic", "Normal", "Fighting", "Poison", "Bug", "Flying"];

    let total = 151;
    let cantidad = 0;
    tipos.forEach(element => {
        cantidad = filterTypeCount(element);
        porncentaje = total / cantidad;
        porncentaje = 100 / porncentaje;
        alert("tipo: " + element + " porcentaje: " + porncentaje + "%");
    });
};*/