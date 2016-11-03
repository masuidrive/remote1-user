class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :uid, unique: true
      t.string :username_digest, unique: true
      t.string :password_digest
      t.boolean :active

      t.timestamps
    end
  end
end
