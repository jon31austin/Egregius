json.set! @track.id do 
  json.extract! @track, :id, :title, :artist_id, :album_id, :lyrics
  json.artist @track.artist.name
  json.album @track.album.name
end