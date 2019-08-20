Rails.application.routes.draw do
  root 'my_list#index'

  resources :products, only: [:index] do
    get :search, on: :collection
    get :by_category, on: :collection
  end
end
