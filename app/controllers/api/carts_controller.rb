class Api::CartsController < ApplicationController
    # def index
    #     @user = User.find(params[:id])
    #     @product = Product.find(params[:id])
    #     render :index
    # end

    def show
        @cart = Cart.find(params[:id])
        render :show
    end

    def create

        @cart = Cart.new(cart_params)
        if @cart.save
            render json: ['cart created']
        else
            render json: @cart.errors.full_messages
    end

    def destroy

    end

    private

    def cart_params
        params.require(:cart).permit(:quantity, :buyer_id, :product_id)
    end

end