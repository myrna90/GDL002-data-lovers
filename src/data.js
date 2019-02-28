// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

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

