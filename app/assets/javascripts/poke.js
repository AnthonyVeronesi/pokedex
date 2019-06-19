$(function(){
  //JSON, $.getJSON()
  var pokeapi_url = "http://pokeapi.co/api/v2/generation/1";

  $.getJSON(pokeapi_url).done(function(data){
    console.log(data);
  })
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
