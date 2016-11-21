class CreateTopics < ActiveRecord::Migration[5.0]
  def change
    create_table :topics do |t|
      t.string :uid, unique: true
      t.text :body
      t.boolean :active
      t.references :category, foreign_key: true
      t.integer :order_index, default: 0

      t.timestamps
    end
  end
end
