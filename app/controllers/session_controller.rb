class SessionController < ApplicationController
    skip_before_action :authorize, only: :create

    #post: login
    def create
        user=User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id]=user.id
        render json: user
        else
            render json: { errors: ["Invalid username or password, please try again"] }, status: :unauthorized
        end
    end

    
end
