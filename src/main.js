import { buttonFunction } from './data.js';
import { filter } from './data.js';
import data from './data/pokemon/pokemon.js';


console.log(buttonFunction.search);
console.log(buttonFunction.pokemonProfileDisplay);
/* console.log(buttonFunction.goToPreviousPokemon);
console.log(buttonFunction.goToNextPokemon); */
console.log(filter.generationFilter)
console.log(filter.typeFilter)
console.log(filter.weaknessesFilter)
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





