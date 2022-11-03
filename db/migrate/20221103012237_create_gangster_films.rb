class CreateGangsterFilms < ActiveRecord::Migration[6.1]
    def change
      create_table :gangster_films do |t|
        t.string :title 
        t.string :genre 
        t.string :director
        t.string :description
        t.timestamps
      end
    end
end
