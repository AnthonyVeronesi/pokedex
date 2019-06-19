class PokeController < ApplicationController
  include HTTParty
  require 'oj'
  def home

  end

  def create_pokemon_table
    region_ids = (1..151)
    region_ids.each do |i|
      # creates a table for the autofill to refrence, can use the names added by id to then create API string
      pokemon = HTTParty.post("https://pokeapi.co/api/v2/#{i}")

      @ = []
      pokemon >> @table
    end
    @table
    # table to be refrenced in PokeController
  end

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
# will not sync with github
