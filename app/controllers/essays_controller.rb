class EssaysController < ApplicationController
  before_action :authenticate_user!
  before_action :prepare_category
  before_action :prepare_essay

  def edit
  end

  def create
    @topic = Topic.find_by(uid: params[:essay][:topic_uid], active: true)
    @essay = @category.post_essay(current_user, @topic, params[:essay][:body])
    render json: @essay
  end

  private
  def prepare_category
    @category = Category.find_by(uid: params[:category_id])
    head :not_found unless @category
  end

  private
  def prepare_essay
    @essay = @category.essays.find_by(user_id: current_user.id) || current_user.essays.build
  end
end
