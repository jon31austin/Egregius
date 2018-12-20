class Api::SearchesController < ApplicationController 

  def index
    field = params[:search_field] 
    string = params[:search_string]

    if field == "track"
      result_arr = Track.search_by_string(string)
    elsif field == "artist"
      result_arr = Artist.search_by_string(string)
    elsif field == "album"
      result_arr = Album.search_by_string(string)
    end

    render json: result_arr
  end

end