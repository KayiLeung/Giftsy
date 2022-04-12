class Api::RatingsController < ApplicationController
    
    def index
        @ratings = Rating.all
        render :index
    end

    def show
        @rating = Rating.find(params[:id])
        render :show
    end


    def create
        @rating = Rating.new(rating_params)
        if @rating.save
            render :show
        else
            render json: @rating.errors.full_messages
        end
    end


    def update
        @rating = Rating.find(params[:id])

        if @rating.update(rating_params)
            render :show
        else 
            render json @rating.errors.full_messages
        end
    end


    def destroy
        @rating = Rating.find(params[:id])
        @rating.destroy
        render :show
    end

    private

    def rating_params
        params.require(:rating).permit(:score, :buyer_id, :product_id, :comment)
    end
end
