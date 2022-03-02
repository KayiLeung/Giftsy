class Api::ProductsController < ApplicationController

    def show
        @product = Product.all
        render 'api/ratings/product'
    end

    def create 
        @product = Product.new(product_params)
        if @product.save
            render json: ['product is listed']
        else
            render json: @product.errors.full_messages
        end
    end

    def destroy
        @product = Product.find(params[:id])
        @product.destroy
        redner json: ['listing removed']
    end

    def update
        @product = Product.find(params[:id])
        if @product.update(product_params)
            render json: ['update sucess!']
        else
            render json: ['something wrong!']
        end
    end

    private

    def product_params
        params.require(:product).permit(:title, :description, :quantity, :price, :seller_id)
    end

end