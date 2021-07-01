import data from './data/pokemon/pokemon.js';

console.log(data)

export const buttonFunction = {

  search: function () {
    let searchPokemonByName = document.getElementById('searchInput').value.toLowerCase()
    let searchOrClickedPokemonId = ''
    data.pokemon.forEach(element => {
    if (searchPokemonByName == element.name){
     
      searchOrClickedPokemonId = element.num
      sessionStorage.setItem("searchOrClickedPokemonId", searchOrClickedPokemonId);
      window.location.href = "pokemonProfile.html";
      }
    });
  }

  ,pokemonProfileDisplay: function () {
    let searchOrClickedPokemonId = event.currentTarget.getAttribute("id");
    sessionStorage.setItem("searchOrClickedPokemonId", searchOrClickedPokemonId);
    window.location.href = "pokemonProfile.html";
  }


  ,goToPreviousPokemon: function () {

  }

  ,goToNextPokemon: function () {

  }
}




export const filter = {

  generationFilter: function () {

  }

  ,typeFilter: function () {

  }

  ,weaknessesFilter: function () {

  }

};





