@track_comments.each do |comment|
  json.set! comment.id do 
    json.extract! comment, :id, :body, :track_id, :user_id, :created_at
    json.username comment.user.username
  end
end