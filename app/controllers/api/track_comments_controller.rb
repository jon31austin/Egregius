class Api::TrackCommentsController < ApplicationController 
  def index
    @track_comments = TrackComment.search_by_track(params[:track_id])
    render "api/track_comments/index"
  end 

  def create
    @track_comment = TrackComment.new(track_comment_params)

    if @track_comment.save 
      render "api/track_comments/show"
    else 
      render json: @track_comment.errors.full_messages
    end
  end

  def destroy 
  end

  private
  def track_comment_params 
    params.require(:comment).permit(:body, :user_id, :track_id)
  end
end