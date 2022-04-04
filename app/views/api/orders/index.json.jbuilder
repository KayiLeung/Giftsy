@orders.each do |order|
    json.set! order.id do
        json.partial! 'rating', rating: rating
    end
    
end