module AuthenticateUser                                                                                                       
  extend ActiveSupport::Concern

  private
  def authenticate_user!
    return if current_user
    redirect_to :new_sessions
  end

  private
  def current_user
    @current_user ||= User.find_by(uid: session[:current_user_uid])
  end

  private
  def set_authorized_user(user)
    @current_user = user
    session[:current_user_uid] = user.try(:uid)
  end
end