class ReviewsController < ApplicationController
   
    get '/reviews' do 
      Review.all.to_json(include: [:gangster_film]) # brings in all the associated reviews
  end

  get '/reviews/:id' do
    Review.find_by_id(params[:id]).to_json(include: [:gangster_film])
  end

  post '/reviews' do 
      review = Review.new(params)
      if review.save
          review.to_json(include: [:gangster_film])
      else
          {errors: review.errors.full_message }.to_json
      end
  end

  patch '/reviews/:id' do 
    review = Review.find_by_id(params[:id])
    if review.update(params) 
      review.to_json(include: [:gangster_film])
      else
          {errors: review.errors.full_messages}.to_json
      end
  end

  delete '/reviews/:id' do 
    review = Review.find_by_id(params[:id])
      if review.destroy
          review.to_json
        else
          {error: ["Movie Not Found"]}.to_json
        end
  end
  
end