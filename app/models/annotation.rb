class Annotation < ApplicationRecord 
  validates :body, :start_index, :end_index, :user_id, :track_id, presence: true

  belongs_to :user
  belongs_to :track

  def self.find_track_annotations(track_id)
    Annotation.where(track_id: track_id)
  end

end