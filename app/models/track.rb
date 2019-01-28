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
  validate :ensure_photo

  belongs_to :artist 
  belongs_to :album
  has_one_attached :photo # for AWS local storage
  has_many :annotations

  # def self.get_top_songs(offset)
  #   Track.select("*")
  #        .joins(:annotations)
  #        .includes(:artist, :album)
  #        .with_attached_photo
  #        .group("track.id").order('COUNT(annotations.id) DESC').limit(6).offset(offset)
  # end

  def self.get_top_song_ids(offset)
    Track.joins(:annotations)
         .group(:id)
         .order('COUNT(annotations.id) DESC')
         .limit(6).offset(offset)
  end

  # eager load to prevent too many sql queries
   def self.get_top_songs(ids)
    Track.includes(:artist, :album, :annotations)
         .where(id: ids)
         .with_attached_photo
   end

  def self.search_by_string(str)
    Track.select("*")
         .joins(:artist)
         .where("UPPER(tracks.title) LIKE UPPER('%#{str}%')")
         .limit(20)
         .pluck("tracks.id", "tracks.title", "artists.name")
  end

  def self.letter_search(letter)
    Track.includes(:artist).where("UPPER(tracks.title) LIKE UPPER('#{letter}%')")

  end

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached."
    end
  end

end