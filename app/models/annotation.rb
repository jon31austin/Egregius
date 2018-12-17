class Annotation < ApplicationRecord 
  validates :body, :start_index, :end_index, :user_id, :track_id, presence: true

  belongs_to :user
  belongs_to :track

end