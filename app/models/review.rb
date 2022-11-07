class Review < ActiveRecord::Base 
    belongs_to :gangster_film
    belongs_to :critic
end