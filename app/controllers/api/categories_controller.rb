class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.all
        render 'api/categories/index'

    end

    def show
        @category = Category.find(params[:id])
        render 'api/categories/show'
    end

    def create 
        @category = Category.new(category_params)
        if @category.save
            render : json: ['category created']
        else
            render :json: @category.errors.full_messages
        end
    end
end
