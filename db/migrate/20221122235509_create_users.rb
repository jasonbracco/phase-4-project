class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :bio
      t.string :name
      t.string :username
      t.string :password_digest
      t.integer :age
      t.string :image_url

      t.timestamps
    end
  end
end
