Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do

    resources :users, only: [:index, :show, :create] do
      resources :order, only:[:create, :show]
      resources :carts, only: [ :create, :show]
    end

    resource :session, only: [:create, :destroy]

    resources :products, only: [:show, :index] do
      resources :ratings, only:[:create]
    end

    resources :categories, only: [:show, :index]
    resources :ratings, only: [:index, :show, :update, :destroy]

    resources :carts, only: [:index, :show, :create, :destroy] do
      resources :cart_items, only: [:index, :show, :create, :update, :destroy]
    end

  end
end
