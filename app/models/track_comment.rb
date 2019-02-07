class TrackComment < ApplicationRecord 
  validates :body, :user_id, :track_id, presence: true

  belongs_to :track 
  belongs_to :user

  def self.search_by_track(id)
    TrackComment.includes(:user).where("track_id = #{id}")
  end
  
end