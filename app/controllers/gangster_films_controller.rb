class GangsterFilmsController < ApplicationController
   
    get '/gangster_films' do 
        GangsterFilm.all.to_json(include: [:gangster_films]) #includes all the gangster films
    end
    # Add your routes here
    
   
  
  end