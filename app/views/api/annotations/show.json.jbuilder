json.set! @annotation.id do 
  json.extract! @annotation, :id, :start_index, :end_index, :user_id, :body, :track_id
  json.username @annotation.user.username
  json.track @annotation.track.title
end