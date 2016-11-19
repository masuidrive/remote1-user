# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  get 'welcome' => 'welcome#index'

  resource :sessions, only: %w(new create destroy)
  resource :users, only: %w(new create edit update) do
    get :check_username
  end
end
