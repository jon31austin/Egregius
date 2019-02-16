class CreateTrackCommentLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :track_comment_likes do |t|
      t.integer :user_id, null: false
      t.integer :track_comment_id, null: false
      t.integer :like_type, null: false
    end

    add_index :track_comment_likes, [:user_id, :track_comment_id], unique: true
  end
end
