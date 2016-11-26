class WelcomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @categories = Category.visible.order_by_index.includes(:topics)
    @essays = current_user.essays.includes(:topic => :category)
  end
end
