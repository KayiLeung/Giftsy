# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create!(email: 'user1001@test.com', password: 'password', fname:  'user1001', lname: 'test' )
user2 = User.create!(email: 'user1002@test.com', password: 'password', fname:  'user1002', lname: 'test' )
user3 = User.create!(email: 'user1003@test.com', password: 'password', fname:  'user1003', lname: 'test' )
user4 = User.create!(email: 'user1004@test.com', password: 'password', fname:  'user1004', lname: 'test' )