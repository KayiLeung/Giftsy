class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def show
  #   @user = User[]

  # end

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :email, :password)
  end
end