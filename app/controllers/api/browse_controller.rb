class Api::BrowseController < ApplicationController 
  def songs_by_letter 
    @next_tracks = Track.letter_search(params[:letter])
    render "api/tracks/index"
  end
end