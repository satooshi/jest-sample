Rails.application.routes.draw do
  resources :todos
  delete 'todos', to: 'todos#destroy_all'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  match '*path' => 'options_request#preflight', via: :options
end
