class Api::AnnotationsController < ApplicationController 

  def index
    @annotations = Annotation.find_track_annotations(params[:track_id])
    render "api/annotations/index"
  end

  def create 
    @annotation = Annotation.new(annotation_params)

    if @annotation.save 
      render "api/annotations/show"
    else 
      render json: @annotation.errors.full_messages, status: 401
    end
  end 

  def update

  end

  def destroy

  end

  private
  def annotation_params
    params.require(:annotation).permit(:body, :start_index, :end_index, :user_id, :track_id)
  end
end