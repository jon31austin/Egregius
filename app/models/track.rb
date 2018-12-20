# == Schema Information
#
# Table name: tracks
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  lyrics     :text             not null
#  artist_id  :integer          not null
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord 
  validates :title, :lyrics, :artist_id, :album_id, presence: true

  belongs_to :artist 
  belongs_to :album
  #has_many :annotations

  def self.get_top_songs(offset)
    Track.includes(:artist, :album).limit(6).offset(offset)
  end

  def self.search_by_string(str)
    Track.select("tracks.title, artists.name, albums.name")
         .joins(:artist, :album)
         .where("UPPER(tracks.title) LIKE UPPER('#{str}%')")
         .limit(20)
         .pluck("tracks.title", "artists.name", "albums.name")
  end

end