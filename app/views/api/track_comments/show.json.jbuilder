json.set! @track_comment.id do
  json.extract! @track_comment, :id, :body, :track_id, :user_id, :created_at
  json.username @track_comment.user.username
end