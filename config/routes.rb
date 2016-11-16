# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  resource :users, only: %w(new create edit update) do
    get :check_username
  end
end
