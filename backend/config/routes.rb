Rails.application.routes.draw do
  # get 'notes/index'

  # get 'solutions/index'

  # get 'solutions/show'

  # get 'solutions/create'

  # get 'solutions/delete'

  # get 'solutions/update'

  # get 'problems/index'

  # get 'problems/show'

  # get 'problems/create'

  # get 'problems/delete'

  # get 'problems/update'

  namespace :api do
    resources :problems, :solutions, :notes
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
