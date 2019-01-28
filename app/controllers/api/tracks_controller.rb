class Api::TracksController < ApplicationController

  def index
    offset = params[:offset]
    @ids = Track.get_top_song_ids(offset).map {|track| track.id }
    @next_tracks = Track.get_top_songs(@ids)
    render "api/tracks/index"
  end

  def show
    @track = Track.find_by(id: params[:id])
    @track.artist = @track.artist
    @track.album = @track.album
    if @track
      render "api/tracks/show"
    else 
      render json: ["That track doesn't exist!"]
    end
  end

  def create
    @track = Track.new(title: params[:track][:title], lyrics: params[:track][:lyrics])

    artist_name = params[:track][:artist]
    artist = Artist.find_by(name: artist_name)
    if artist 
      @track.artist_id = artist.id 
    else 
      artist = Artist.create(name: artist_name) 
      @track.artist_id = artist.id
    end

    album_name = params[:track][:album]
    album = Album.find_by(name: album_name)
    if album
      @track.album_id = album.id 
    else 
      album = Album.create(name: album_name, artist_id: artist.id, year: params[:track][:year]) 
      @track.album_id = album.id
    end

    if params[:track][:photo] != "null"
      @track.photo = params[:track][:photo]
    end
    
    if @track.save 
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end

  end

  private
  def track_params
    params.require(:track).permit(:title, :lyrics, :artist, :album, :year, :photo)
  end

end