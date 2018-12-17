@annotations.each do |ann|
  json.set! ann.id do 
    json.extract! ann, :id, :start_index, :end_index, :user_id, :body, :track_id
    json.username ann.user.username
    json.track ann.track.title
  end
end