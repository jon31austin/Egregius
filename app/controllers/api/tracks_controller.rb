class Api::TracksController < ApplicationController 

  def index
    offset = params[:offset]
    @next_tracks = Track.get_top_songs(offset)
    render "api/tracks/index"
  end

  def show
    @track = Track.find_by(id: params[:id])
    if @track
      render "api/tracks/show"
    else 
      render json: ["That track doesn't exist!"]
    end
  end

  def create
    @track = Track.new(track_params)

    if @track.save 
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end

  end

  private
  def track_params
    params.require(:track).permit(:title, :lyrics)
  end

end