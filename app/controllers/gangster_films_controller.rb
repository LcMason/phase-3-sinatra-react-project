class GangsterFilmsController < ApplicationController
   
    get '/gangster_films' do 
        GangsterFilm.all.to_json
    end
    # Add your routes here
    
   
  
  end