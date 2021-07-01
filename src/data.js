import data from './data/pokemon/pokemon.js';

console.log(data)

export const buttonFunction = {

  search: function () {
    let searchPokemonByName = document.getElementById('searchInput').value.toLowerCase()
    data.pokemon.forEach(element => {
      if (searchPokemonByName == element.name)
      alert("pokemon found")
      
      
    

    });
  }

  ,pokemonProfileDisplay: function () {
    let clickedPokemonId = event.currentTarget.getAttribute("id");
    sessionStorage.setItem("clickedPokemonId", clickedPokemonId);
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





