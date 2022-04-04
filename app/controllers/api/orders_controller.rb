# class Api::OrdersController < ApplicationController
    
#     def index
#         @Orders = Order.where(cart_id: params[:cart_id]).all
#         render :index
#     end
    
#     def show
#         @Orders = Order.find(params[:id])
#         render :show
#     end

#     def create
#         @order = Order.new(order_params)

#         if @order.save
#             render :show
#         else
#             render json: @order.errors.full_messages, status: 422
#         end
#     end

#     def update
#         @order = Order.find(params[:id])

#         if @order.update(order_params)
#             render :show
#         else
#             render json: @order.errors.full_messages, status: 422
#         end
#     end

#     def destroy
#         @order = Order.find(params[:id])
#         @order.destroy
#         render json: ['deleted'], status: 200
#     end

#     private

#     def order_params
#         params.require(:order).permit(:cart_id, :product_id, :quantity)
#     end
# end

# end