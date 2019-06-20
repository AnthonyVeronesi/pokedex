class PokeController < ApplicationController
  include HTTParty
  require 'oj'

  def home
    @poke = [
      :name => 'Bulbasaur',
      :number => 1,
      :capture_rate => 5,
      :type => 'grass',
      :type_2 => 'poison',
      :shape => 'quadriped',
      :sprite => 'image'
    ]
  end

  def destroy

  end

  # def create_pokemon_table(@poke)
  #   # creates a table for the autofill to refrence, can use the names added by id to then create API string
  #   table = table
  #   pokemon = HTTParty.post("https://pokeapi.co/api/v2/#{@poke}").parse
  #   pokemon >> table
  # end

  def search
    input = :input
    response = HTTParty.post("https://pokeapi.co/api/v2/#{:input}")
    response_id = response.id.to_i
    pokes = []
    pokes = response
           .where('name LIKE ?', "%#{term}%") && response_id < 152
    render json: pokes
  end
end
