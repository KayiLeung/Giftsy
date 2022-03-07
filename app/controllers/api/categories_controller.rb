class Api::CategoriesController < ApplicationController
    def index
        # debugger
        @categories = Category.all
        render 'api/categories/index'

    end

    def show
        # debugger
        # @category = Category.find(params[:id])
        @category = Category.find_by(id: params[:id])
        # debugger
        render :show
    end

    def create 
        @category = Category.new(category_params)
        if @category.save
            render json: ['category created!']
        else
            render json: @category.errors.full_messages
        end
    end
end
