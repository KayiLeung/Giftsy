
@users.each do |user|
    debugger
    json.set! user.id do
        json.partial! 'user', user: user
    end
end