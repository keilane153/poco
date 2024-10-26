
Rails.application.routes.draw do
  root "articles#index" # torna o index a pagina principal. não precisando necessáriamente dar um /article.
  
  
  # get "/articles", to: "articles#index" # rota index principal. Leva ao metodo chamado index.
  # get "/articles/:id", to: "articles#show"

  resources :articles

end
