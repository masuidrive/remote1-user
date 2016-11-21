class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.string :uid, unique: true
      t.string :label_en
      t.string :label_ja
      t.boolean :visible, default: false
      t.integer :order_index, default: 0

      t.timestamps
    end
  end
end
