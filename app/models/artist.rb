# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord 
  validates :name, presence: true, uniqueness: true

  has_many :albums
  has_many :tracks

  def self.search_by_string(str)
    Artist.select("*")
         .joins(:tracks)
         .where("UPPER(artists.name) LIKE UPPER('#{str}%')")
         .limit(20)
         .pluck("tracks.id", "tracks.title", "artists.name")

    # had to take this off because it would do weird permutations with the second joins
    # Artist.select("*") 
    #      .joins(:tracks, :albums)
    #      .where("UPPER(artists.name) LIKE UPPER('#{str}%')")
    #      .group("tracks.id")
    #      .limit(20)
    #      .pluck("tracks.id", "tracks.title", "artists.name", "albums.name")
  end
  
end
