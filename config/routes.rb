Rails.application.routes.draw do
  namespace :frontend do
    post "/login", to: "sessions#create"
  end




  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
