class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def check_username
    user = User.find_by(username_digest: params[:username_digest])
    render json: {
      available: !user,
      username_digest: params[:username_digest]
    }
  end

  def edit
  end
end
