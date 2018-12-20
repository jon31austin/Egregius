Api::SearchesController < ApplicationController 

  def index
    field = params[:search_field] 

    if field == "track"

    elsif field == "artist"

    elsif field == "album"
      
    end

  end

end