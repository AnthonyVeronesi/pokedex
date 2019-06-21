$("pokeinput").ready(function() {
  console.log("am I getting here?");
  //JSON, $.getJSON()
  var pokeapi_url = "http://pokeapi.co/api/v2/generation/1";

  $.getJSON(pokeapi_url).done(function(data){
    console.log(data);
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = pokemon.name.charAt(0).toUpperCase + pokemon.name.slice(1);
      var par = $("<p>").html("Pokemon species" + (index+1) + " is " + name);
      par.appendTo("pokemon_table");
    });
  }).fail(function() {
    console.log("Request to pokeAPI failed.");
  }).always(function() {
    console.log("PokeAPI is working as expected.");
  });
});



// var request = new XMLHttpRequest()
// function pageLoad()
// {
//   console.log('i got here')
//   request.open('GET', 'https://pokeapi.co/api/v2/generation/1', true)
// };
// request.onload = function() {
//   var poke_data JSON.parse(this.response)
//
//   poke_data.forEach(pokemon_species => {
//   //logging each pokemon name
//   console.log(pokemon_species.name)
//   })
// }
//
// request.send()
