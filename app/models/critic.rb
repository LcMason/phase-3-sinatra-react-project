class Critic < ActiveRecord::Base 
    has_many :reviews
    has_many :gangster_films, through: :reviews
end