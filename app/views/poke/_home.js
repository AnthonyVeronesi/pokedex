<script>
  $(function(){
  //JSON, $.getJSON()
  var pokeapi_url = "http://pokeapi.co/api/v2/generation/1";

  $.getJSON(pokeapi_url).done(function(data){
    console.log(data);
  })
});
</script>
