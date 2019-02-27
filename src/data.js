//funcion que recupera la data y la muestra en pantalla principal
const pokeData = POKEMON.pokemon;
let list = [];
for (let i = 0; i < pokeData.length; i++) {
    let pokeList = " <img src='" + pokeData[i].img + "'/>" + " " + pokeData[i].name + " " + pokeData[i].num;
    list += pokeList;
}


let pokeGrass = pokeData.filter(function(el) {
    return (el.type[0] == "Flying" || el.type[1] == "Flying");
});
console.log(pokeGrass)