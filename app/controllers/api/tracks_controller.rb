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
    @track = Track.new(title: params[:track][:title])
    
    artist_name = params[:track][:artist]
    artist = Artist.find_by(name: artist_name)
    if artist 
      @track.artist_id = artist.id 
    else 
      artist = Artist.create(name: artist_name).id 
      @track.artist_id = artist.id
    end

    album_name = params[:track][:album]
    album = Album.find_by(name: album_name)
    if album
      @track.album_id = album.id 
    else 
      album = Album.create(name: album_name, artist_id: artist.id, year: params[:track][:year]).id 
      @track.album_id = album.id
    end
    
    if @track.save 
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end

  end

  private
  def track_params
    params.require(:track).permit(:title, :lyrics, :artist, :album, :year)
  end

end