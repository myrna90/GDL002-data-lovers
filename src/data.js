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



console.log(pokeData[i].num)
