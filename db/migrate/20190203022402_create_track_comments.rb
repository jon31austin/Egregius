class CreateTrackComments < ActiveRecord::Migration[5.2]
  def change
    create_table :track_comments do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end
    
    add_index :track_comments, :user_id
    add_index :track_comments, :track_id
  end
end
