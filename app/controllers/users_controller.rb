class UsersController < ApplicationController
  before_action :authenticate_user!, only: %w(edit update)

  def new
  end

  def create
    @user = User.new(params.require('user').permit(:username, :password))
    @user.save!
    set_authorized_user @user
    render json: @user
  end

  def check_username
    user = User.find_by(username: params[:username])
    render json: {
      available: !user,
      username: params[:username]
    }
  end

  def edit
  end

  def update
    current_user.password = params[:password]
    current_user.save!
    render json: @user
  end
end
