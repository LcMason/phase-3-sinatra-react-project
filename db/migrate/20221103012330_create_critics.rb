class CreateCritics < ActiveRecord::Migration[6.1]
  def change
      create_table :critics do |t|
        t.integer :rating
        t.timestamps
      end
  end
end
