class GangsterFilmsController < ApplicationController
   
    get '/gangster_films' do 
        GangsterFilm.all.to_json(include: [:reviews]) # brings in all the associated reviews
    end

    post '/gangster_films' do 
        gangster_film = GangsterFilm.new(params)

        if gangster_film.save
            gangster_film.to_json(include: [:reviews])
        else
            {errors: gangster_film.errors.full_message }.to_json

        end
    end 



end