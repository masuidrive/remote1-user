class AddDescriptionToCategories < ActiveRecord::Migration[5.0]
  def change
    add_column :categories, :description_ja, :text
    add_column :categories, :description_en, :text
  end
end
