//funcion que recupera la data y la muestra en pantalla principal
const pokeData = POKEMON.pokemon;
let list = [];
for (let i = 0; i < pokeData.length; i++) {
    let pokeList = " <img src='" + pokeData[i].img + "'/>" + " " + pokeData[i].name + " " + pokeData[i].num;
    list += pokeList;
}

<<<<<<< HEAD
//funcion para filtrar por tipo
function filterType(PokeData, condition) {
    pokeData;
    const filterCond = pokeData.filter(pokemon => (pokemon.type[0] == condition || pokemon.type[1] == condition));
    filterCond.forEach(element => {
        console.log(element.name, element.type)
    });
}
//funcion para ordenar a-z
console.log(pokeData.sort(a, b)(pokeData.name - pokeData.name))
=======
const example = () => {
  return 'example';
};

const pokeData = window.POKEMON.pokemon;
let list=[];
for(let i = 0; i < pokeData.length; i++){
  let pokeList = "<div class='pokemonScreen'>"+" <img src='"+pokeData[i].img+"'/>" + "<br>" + pokeData[i].num + "<br> " + pokeData[i].name + "</div>" ;
  list += pokeList;
};


function filterType(PokeData, condition) {
   pokeData;
   const filterCond = pokeData.filter(pokemon => (pokemon.type[0] == condition || pokemon.type[1] == condition));
   filterCond.forEach(element => {
      console.log(element.name, element.type) 
      document.getElementById("pokeList").innerHTML += " "+  element.name + " " + element.type + " /";
   });
}

>>>>>>> 97942abe31a0bb5260d39f93f91910926f9d7710
