@track_comments.each do |comment|
  json.set! comment.id do 
    json.extract! comment, :id, :body
    json.username comment.user.username
  end
end