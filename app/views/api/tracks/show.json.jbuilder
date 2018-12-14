json.set! @track.id do 
  json.extract! @track, :id, :title, :artist_id, :album_id, :lyrics
end