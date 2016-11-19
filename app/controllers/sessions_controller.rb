class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(username: params[:user][:username])
    if user.try(:authorize, params[:user][:password])
      set_authorized_user user
      head :created
    else
      head :unprocessable_entity
    end
  end

  def destroy
    set_authorized_user nil
    head :ok
  end
end
