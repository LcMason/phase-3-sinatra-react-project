class CriticsController < ApplicationController
   
    get '/critics' do 
      Critic.all.to_json(include: [:gangster_films]) # brings in all the associated reviews
  end

  post '/critics' do 
      critic = Critic.new(params)

      if critic.save
          critic.to_json(include: [:reviews])
      else
          {errors: gangster_film.errors.full_message }.to_json
      end
  end

      delete '/critics/:id' do 
        critic = Critic.find_by_id(params[:id])
          if critic.destroy
              critic.to_json
            else
              {error: ["Movie Not Found"]}.to_json
            end
          end
    


end
