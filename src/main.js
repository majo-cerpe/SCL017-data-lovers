import { buttonFunction } from './data.js';
import { filter } from './data.js';
import data from './data/pokemon/pokemon.js';


console.log("Función search " + buttonFunction.search);
console.log("Función pokemonProfileDisplay " + buttonFunction.pokemonProfileDisplay);
console.log("Función goToPreviousPokemon " + buttonFunction.goToPreviousPokemon);
console.log("Función goToNextPokemon " + buttonFunction.goToNextPokemon);
console.log("Función generationFilter " + filter.generationFilter)
console.log("Función TypeFilter " + filter.typeFilter)
console.log("Función weaknessesFilter " + filter.weaknessesFilter)
console.log(data);

const containerRoot = document.getElementById('root');


let htmlCode = '';

data.pokemon.forEach(element => {
    htmlCode += `<div id=${element.num} class="pokemonCard">
                    <div class="num">${"#" + element.num}</div>
                    <img class= "img" src=${element.img}>
                    <div class="name">${element.name}</div>
                    <div class=type>`

    element.type.forEach(type => {
        htmlCode += `<div class="${type}">${type}</div>`
    });

    htmlCode += `</div>
                 </div>`

    containerRoot.innerHTML = htmlCode;
});


document.getElementById('searchButton').addEventListener("click", buttonFunction.search);



for (let i = 0; i < data.pokemon.length; i++ ){
document.querySelectorAll(".pokemonCard")[i].addEventListener("click", buttonFunction.pokemonProfileDisplay);
}





