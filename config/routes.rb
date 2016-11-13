# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  resources :users, only: %w(new create edit update) do
    collection do
      get :check_username
    end
  end
end
