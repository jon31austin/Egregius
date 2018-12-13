class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :name, null: false
      t.integer :year
      t.integer :artist_id, null: false

      t.timestamps
    end
    add_index :albums, :name, unique: true
    add_index :albums, [:artist_id, :name], unique: true
  end
end
