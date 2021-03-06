Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :show, :create, :index]

    resource :session, only: [:create, :destroy]

    resources :carts, only: [:index, :show, :create, :update, :destroy]

    resources :products, only: [:show, :index] do
      resources :ratings, only:[:create]
    end

    resources :categories, only: [:show, :index]
    resources :ratings, only: [:index, :show, :update, :destroy]
    # resource :carts, only: [:index, :show, :update, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
