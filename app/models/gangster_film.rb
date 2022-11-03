class GangsterFilm < ActiveRecord::Base 
    has_many :reviews, dependent: :destroy #destroys all the reviews that belong to each gangster film.
    has_many :critics, through: :reviews
end