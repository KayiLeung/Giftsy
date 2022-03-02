# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Product.delete_all
# ApplicationRecord.connection.reset_pk_sequence!('users')

user1 = User.create!(email: 'user1001@test.com', password: 'password', fname:  '1001', lname: 'user' )
user2 = User.create!(email: 'user1002@test.com', password: 'password', fname:  '1002', lname: 'user' )
user3 = User.create!(email: 'user1003@test.com', password: 'password', fname:  '1003', lname: 'user' )
user4 = User.create!(email: 'user1004@test.com', password: 'password', fname:  '1004', lname: 'user' )
userDemo = User.create!(email: 'demo@test.com', password: 'password', fname:  'Demo', lname: 'user')


product1 = Product.create!(title: 'Cup', description: 'nice gift', quantity: 100, price:10, seller_id: user1.id)
product1 = Product.create!(title: 'Plate', description: 'nice wedding gift', quantity: 10, price:15, seller_id: user2.id)


