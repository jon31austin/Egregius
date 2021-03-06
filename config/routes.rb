Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :show, :create] do 
      resources :track_comments, only: [:index, :create, :destroy]
    end
    resources :annotations, only: [:index, :create, :destroy, :update]
    resources :searches, only: :index
    get 'browse/:letter', :to => 'browse#songs_by_letter'
  end
  
end
