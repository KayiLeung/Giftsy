class Api::CartsController < ApplicationController

    # skip_before_action :verify_authenticity_token  
    def index

        @carts = Cart.where(buyer_id: current_user.id).all
        render :index
    end

    def show
        @cart = Cart.find(params[:id])
        render :show
    end

    def create
        @cart = Cart.new(cart_params)
        if @cart.save
            render :show
        else
            render json: @cart.errors.full_messages
        end
    end

    def update
        @cart = Cart.find(params[:id])
        if @cart && @cart.update(cart_params)
            render :show
        end

    end

    def destroy

        @cart = Cart.find(params[:id])
        @cart.destroy
        render json: ['cart deleted']
    end

    private

    def cart_params
        params.require(:cart).permit(:buyer_id, :product_id, :quantity)
    end

end