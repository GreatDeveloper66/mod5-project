# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create,:index,:edit,:update,:destroy] do
		scope module: 'users' do
			resources :sequences, only: [:index,:show,:create,:update,:destroy,:edit]
			end
		end
      resources :categories, only: [:index,:show]
      resources :asanas, only: [:index,:show]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    end
  end
end
