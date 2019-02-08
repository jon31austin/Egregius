@track_comments.each do |comment|
  json.set! comment.id do 
    json.extract! comment, :id, :body, :track_id
    json.username comment.user.username
  end
end