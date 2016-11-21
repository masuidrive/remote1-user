class CreateEssays < ActiveRecord::Migration[5.0]
  def change
    create_table :essays do |t|
      t.string :uid, unique: true
      t.text :body
      t.boolean :selected
      t.references :topic, foreign_key: true

      t.timestamps
    end
  end
end
