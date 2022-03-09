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
        @rating = Rating.new(raing_params)

        if @rating.save
            render :show
        else
            render json: @rating.errors.full_messages
        end
    end


    def update
        @rating = Rating.find(params[:id])

        if @rating.update(raing_params)
            render 'api/ratings/show'
        else 
            render json @rating.errors.full_messages
        end
    end


    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render json: ['deleted']
    end

    private

    def rating_params
        params.require(:rating).permit(:score, :buyer_id, :product_id)
    end
end
