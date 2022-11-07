class AddCriticIdToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :critic_id, :integer
  end
end
