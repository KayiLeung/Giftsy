# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Product.delete_all
Category.delete_all
# ApplicationRecord.connection.reset_pk_sequence!('users')

category1 = Category.create!(category: 'Wedding')
categorypic1 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/wedding.jpg')
category1.photo.attach(io: categorypic1, filename: 'wedding.jpg')

category2 = Category.create!(category: "Father's Day")
category3 = Category.create!(category: "Mother's Day")

category4 = Category.create!(category: "Birthday")
categorypic4 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/happy-birthday-cupcake.jpg')
category4.photo.attach(io: categorypic4, filename: 'happy-birthday-cupcake.jpg')

category5 = Category.create!(category: "New Born")
categorypic5 = UrI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/newborn.jpg')
category5.photo.attach(io: categorypic5, filename: 'newborn.jpg')

category6 = Category.create!(category: "Anniversary")
category7 = Category.create!(category: "Housewarming")
category8 = Category.create!(category: "Retirement")

categoryRandom = Category.create!(category: "Lucky Pick")

user1 = User.create!(email: 'user1001@test.com', password: 'password', fname:  'Dave', lname: 'Potter' )
user2 = User.create!(email: 'user1002@test.com', password: 'password', fname:  'Raquel', lname: 'Aguilar' )
user3 = User.create!(email: 'user1003@test.com', password: 'password', fname:  'Darrel', lname: 'Ortega' )
user4 = User.create!(email: 'user1004@test.com', password: 'password', fname:  'Carole', lname: 'Jefferson' )
userDemo = User.create!(email: 'demo@test.com', password: 'password', fname:  'demo', lname: 'user')


product1 = Product.create!(
    title: '25th Anniversary Quarter KeyChain', 
    description: 'I have hand stamped "25 down" on the 1997 quarter with hearts on each side of the year as well as "Forever to go" along the bottom edge of the back aluminum layer.', 
    quantity: 10, 
    price: 9.99, 
    seller_id: user1.id,
    category_id: category6.id
)
productpic1 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/anniversary_2.jpg')
product1.photo.attach(io: productpic1, filename: "anniversary_2.jpg")

product2 = Product.create!(
    title: 'Spa Tumbler Relaxation Gift Set for Women',
    description: 'Birthday Gifts for Women : Beautifully designed with a modern and elegant touch, our giftbox is made to impress every lady at first sight. Filled with lovely and thoughtful gifts inside, this set once opened will bring her the sweetest surprise and make her feel so loved on her special day.',
    quantity: 10,
    price: 29.99,
    seller_id: user2.id,
    category_id: category3.id
)
productpic2 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/mothers_day_1.jpg')
product2.photo.attach(io: productpic2, filename: 'mothers_day_1.jpg')

product3 = Product.create!(
    title: 'Fishing Keychain for Dad/ Dad Grandpa Daddy Father’s Day Gift / Hooked on Dad',
    description: 'What a cute personalized touch for any fishing father figure! Names on fish are personalized, and the saying on the float can be as well! The keychain includes a hand-painted “float”, fish hook charm, lobster clasp, and all assembled hardware.',
    quantity: 10,
    price: 4.95,
    seller_id: user2.id,
    category_id: category2.id
)
productpic3 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/fathers_day.jpg')
product3.photo.attach(io:productpic3, filename:'fathers_day.jpg')


product4 = Product.create!(
    title: "Mother's Day Personalized Cherrywood - Acrylic - Birch wood Plaque, Beautiful gift - Grandma - Nana",
    description: "Laser cut and engraved Mother's day plaque. We can put up to 12 names/hearts and the number of hearts will adjust to the amount of names you give us.Mom will love it!  This makes the perfect present for this coming Mother's Day.",
    quantity: 10,
    price: 20.99,
    seller_id: user2.id,
    category_id: category3.id
)
productpic4 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/mothers_day_2.jpg')
product4.photo.attach(io: productpic4 , filename: 'mothers_day_2.jpg')

product5= Product.create!(
    title: "Sweet 16 Neon Sign Custom Name Sweet 16 Party Decorations Birthday Neon Sign Party Decor Best Friend Birthday Gifts for her",
    description: "Gorgeous, insanely high quality neon sign made by hand and built to last. Make a statement and design the mood in any room with this gorgeous neon sign sure to create the vibe you've always dreamed of!  Sign comes in 6+ sizes between 60 and 120cm in width. Available in 10 stunning color options",
    quantity: 10,
    price: 29.60,
    seller_id: user2.id,
    category_id: category4.id
)
productpic5 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/sweet16.jpg')
product5.photo.attach(io: productpic5, filename: 'sweet16.jpg.jpg')

product6 = Product.create!(
    title: "Gifts For Him Pokemon Terrarium Sleepy Charmander Terrarium Pokeball Charmander gifts Pokemon go Best Pokemon Gifts For Kids",
    description: "Gorgeous, insanely high quality neon sign made by hand and built to last. Make a statement and design the mood in any room with this gorgeous neon sign sure to create the vibe you've always dreamed of!  Sign comes in 6+ sizes between 60 and 120cm in width. Available in 10 stunning color options",
    quantity: 10,
    price: 60.00,
    seller_id: user1.id,
    category_id: category4.id
)
productpic6 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/pokemon.jpg')
product6.photo.attach(io: productpic6, filename: 'pokemon.jpg')

# product7 = Product.create!(
#     title: "Hand Casting Kit Couples - Plaster Hand Mold Casting Kit, DIY Kits for Adults and Kids, Wedding Gifts for Couple",
#     description: "Preserve Precious Memories – Whether it's a bridal shower gift, wedding gift or just some fun for your family, this hand molding kit is a great way to capture the moment. The Dylan & Rylie hand molds casting kit is the ideal baby hand and footprint kit or a sweet gift for couples. It also makes a great Mr. and Mrs. gift, anniversary gift for her or Christmas gifts for parents.",
#     quantity: 10,
#     price: 29.99,
#     seller_id: user1.id,
#     category_id: category5.id
# )
# productpic7 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new_born_1.jpg')
# product7.photo.attach(io: productpic7, filename: 'new_born_1.jpg')


# product8 = Product.create!(
#     title: "Baby Handprint & Footprint Keepsake Photo Frame Kit",
#     description: "A PERFECT HANDPRINT & FOOTPRINT TO CHERISH - Capture the timeless beauty of your baby's tiny little hands and feet with our complete keepsake and photo frame kit - with clay, roller, double-sided tape, stencil kit, table stand, and wall brackets for easy display on a nursery wall, table, or mantel.",
#     quantity: 10,
#     price: 19.95,
#     seller_id: user1.id,
#     category_id: category5.id

# )
# productpic8 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new_born_gift_2.jpg')
# product8.photo.attach(io: productpic8, filename: 'new_born_gift_2.jpg')

# product9 = Product.create!(
#     title: "Husband Wife Mug Gift, Hubby Wifey Mug Wedding Gift, Unique Wedding for Couple",
#     description: "THE BEST GIFTS FOR COUPLES. Awesome wedding gifts, best wedding anniversary gifts you can find at very reasonable price. Best wedding gifts for the couple, honeymoon gifts, bride and groom, They are ac cute and fun couples gift either way that will be great for the newlyweds!",
#     quantity: 10,
#     price: 26.00,
#     seller_id: user1.id,
#     category_id: category1.id
# )
# productpic9 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/wedding_gift_1.jpg')
# product9.photo.attach(io: productpic9, filename: 'wedding_gift_1.jpg')

# product10 = Product.create!(
#     title: "Malden International Designs Silkscreened Corinthians Verse Mr & Mrs Wood Picture Frame, 5x7, Off White",
#     description: "ELEGANT DESIGN: 
#     Frame holds (1) 5” x 7” vertical Photo within a 4.5” x 6.5” display opening with raised white wood moulding. 
#     Features white and light gray MDF wood with a subtle distressed swirl pattern and the phrase “Mr. & Mrs. Love Is Patient Love Is Kind ” 
#     screenprinted in gray script text",
#     quantity: 10,
#     price: 17.95,
#     seller_id: user1.id,
#     category_id: category1.id
# )
# productpic10 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/wedding_gift.jpg')
# product10.photo.attach(io: productpic10, filename: 'wedding_gift.jpg')

# product11 = Product.create!(
#     title: 'Custom Family & Pet Name Welcome Mat | Custom Names Doormat | Welcome Mat | Housewarming Gift | ', 
#     description: "The perfect decoration for any front porch that can be personalized.

# Makes a great gift for him, her, nana and papa, weddings, housewarming, mothers day and more. The perfect gift for any new or existing home owner.", 
#     quantity: 10, 
#     price: 19.99, 
#     seller_id: user3.id,
#     category_id: category7.id
# )
# productpic11 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/housewarming_2.jpg')
# product11.photo.attach(io: productpic11, filename:'housewarming_2.jpg')

# product12 = Product.create!(
#     title: 'Personalized, Engraved Cutting Board with Wreath Design for Housewarming', 
#     description: "Create a cherished family heirloom with this engraved, name and date cutting board! We will take your name and date and laser engrave it into our high quality, hardwood cutting boards. The perfect gift to remember a loved one!", 
#     quantity: 10, 
#     price: 27.99, 
#     seller_id: user3.id,
#     category_id: category7.id
# )
# productpic12 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/housewarming_1.jpeg')
# product12.photo.attach(io: productpic12, filename:'housewarming_1.jpeg')

# product13 = Product.create!(
#     title: 'Retired Long Sleeve Shirt, Retirement Gift,Funny Retirement Long Sleeve Shirt, Retiree Gift ,Retired Quotes, Retired Not My Problem Anymore', 
#     description: "Retired. Officially retired. It's the first day of the rest of your life and we've got you covered with this super-soft, unisex shirt. Perfect for retirement parties, retiree gifts, and any other occasion that calls for a little celebration.",
#     quantity: 10, 
#     price: 14.99, 
#     seller_id: user3.id,
#     category_id: category8.id
# )
# productpic13 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/retiredment_2.jpg')
# product13.photo.attach(io: productpic13, filename:'retiredment_2.jpg')

# product14 = Product.create!(
#     title: 'Not My Problem Anymore Im Retired Round Rocks Glass-Retirement Gift for Men, Just Retired Glass, Gift For Retirement, Old Fashioned Glass', 
#     description: "This Not My Problem Anymore Im Retired Round Rocks Glass is laser etched creating a beautiful frosted effect that is dishwasher safe and will hold up for years.",
#     quantity: 10, 
#     price: 16.99, 
#     seller_id: user3.id,
#     category_id: category8.id
# )
# productpic14 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/retirement_1.jpg')
# product14.photo.attach(io: productpic14, filename: 'retirement_1.jpg')


