class AddUserIdToEssays < ActiveRecord::Migration[5.0]
  def change
    add_column :essays, :user_id, :integer, foreign_key: true
  end
end
