# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  year       :integer
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord 
  validates :name, presence: true, uniqueness: true
  validates :artist_id, presence: true 

  has_many :tracks
  belongs_to :artist
  
end
