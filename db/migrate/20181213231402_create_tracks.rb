class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.text :lyrics, null: false
      t.integer :artist_id, null: false 
      t.integer :album_id

      t.timestamps
    end
    add_index :tracks, [:title, :artist_id], unique: true
  end
end
