class Api::UsersController < ApplicationController
#   skip_before_action :verify_authenticity_token  
    before_action :ensure_logged_in, only: [:destroy, :show]
    def index

        @users = User.all
        debugger
        render 'api/users/index'
    end
    
    def show
        @user = User.find(params[:id])
        render 'api/users/show'
    end
    
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            debugger
            render json:@user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :fname, :lname)
    end
end