class Api::ProductsController < ApplicationController

def index
    @product = Product.all
    redner 'api/products/index'
end

def create 
    @product = Product.new(product_params)
    if @product
        render 'api/users/show'
    else
        render json: @product.errors.full_messages
end

private

def product_params
    params.require(:product).permit(:title, :description, :quantity, :price)
end