class WelcomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @categories = Category.visible.order_by_index
    @essays = current_user.essays
  end
end
