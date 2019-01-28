@next_tracks.each do |track|
  json.set! track.id do 
    json.extract! track, :id, :title, :artist_id, :album_id, :lyrics
    json.artist track.artist.name
    json.album track.album.name
    json.annotations track.annotations.count
  end
end