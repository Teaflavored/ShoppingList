Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :lists, only: [:show, :index]
  end
end
