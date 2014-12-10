Rails.application.routes.draw do
  root to: "static_pages#home"

  namespace :api, defaults: { format: :json } do
    resources :lists, only: [:show, :index]
  end
end
