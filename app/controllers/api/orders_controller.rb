class Api::OrdersController < ApplicationController
    
   def create
    @order = Orders.new(order_params)

    if @Orders.save
        render json: ['purchased']
    else
        render json: @order.errors.full_messages
   end

end