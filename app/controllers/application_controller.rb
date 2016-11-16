class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include AuthenticateUser
  rescue_from ActiveRecord::RecordNotSaved,  ActiveRecord::RecordInvalid, with: :render_activerecord_error

  private
  def render_activerecord_error(exception)
    if exception.record.is_a?(ActiveRecord::Base)
      render json: { errors: { recordInvalid: record.errors } }, status: :unprocessable_entity
    end
  end
end
