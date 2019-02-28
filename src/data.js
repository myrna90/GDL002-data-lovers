//funcion que recupera la data y la muestra en pantalla principal
const pokeData = POKEMON.pokemon;
let list = [];
for (let i = 0; i < pokeData.length; i++) {
    let pokeList = " <img src='" + pokeData[i].img + "'/>" + " " + pokeData[i].name + " " + pokeData[i].num;
    list += pokeList;
}

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