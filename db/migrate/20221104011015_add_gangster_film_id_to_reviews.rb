class AddGangsterFilmIdToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :gangster_film_id, :integer
  end
end
