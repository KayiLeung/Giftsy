# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Product.delete_all
Category.delete_all
# ApplicationRecord.connection.reset_pk_sequence!('users')

category1 = Category.create!(category: 'Wedding')
category2 = Category.create!(category: "Father's Day")
category3 = Category.create!(category: "Mother's Day")
category4 = Category.create!(category: "Birthday")
category5 = Category.create!(category: "New Born")

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
    seller_id: user1.id
)

# product2 = Product.create!(
#     title: 'Spa Tumbler Relaxation Gift Set for Women',
#     description: 'Birthday Gifts for Women : Beautifully designed with a modern and elegant touch, our giftbox is made to impress every lady at first sight. Filled with lovely and thoughtful gifts inside, this set once opened will bring her the sweetest surprise and make her feel so loved on her special day.',
#     quantity: 10,
#     price: 29.99,
#     seller_id: user2.id
# )

# product3 = Product.create!(
#     title: 'Fishing Keychain for Dad/ Dad Grandpa Daddy Father’s Day Gift / Hooked on Dad',
#     description: 'What a cute personalized touch for any fishing father figure! Names on fish are personalized, and the saying on the float can be as well! The keychain includes a hand-painted “float”, fish hook charm, lobster clasp, and all assembled hardware.',
#     quantity: 10,
#     price: 4.95,
#     seller_id: user2.id
# )


# product4 = Product.create!(
#     title: "Mother's Day Personalized Cherrywood - Acrylic - Birch wood Plaque, Beautiful gift - Grandma - Nana",
#     description: "Laser cut and engraved Mother's day plaque. We can put up to 12 names/hearts and the number of hearts will adjust to the amount of names you give us.Mom will love it!This makes the perfect present for this coming Mother's Day.",
#     quantity: 10,
#     price: 20.99,
#     seller_id: user2.id
# )

# product5= Product.create!(
#     title: "Sweet 16 Neon Sign Custom Name Sweet 16 Party Decorations Birthday Neon Sign Party Decor Best Friend Birthday Gifts for her",
#     description: "Gorgeous, insanely high quality neon sign made by hand and built to last. Make a statement and design the mood in any room with this gorgeous neon sign sure to create the vibe you've always dreamed of!  Sign comes in 6+ sizes between 60 and 120cm in width. Available in 10 stunning color options",
#     quantity: 10,
#     price: 29.60,
#     seller_id: user2.id
# )

# product6 = Product.create!(
#     title: "Gifts For Him Pokemon Terrarium Sleepy Charmander Terrarium Pokeball Charmander gifts Pokemon go Best Pokemon Gifts For Kids",
#     description: "Gorgeous, insanely high quality neon sign made by hand and built to last. Make a statement and design the mood in any room with this gorgeous neon sign sure to create the vibe you've always dreamed of!  Sign comes in 6+ sizes between 60 and 120cm in width. Available in 10 stunning color options",
#     quantity: 10,
#     price: 60.00,
#     seller_id: user1.id
# )

# product7 = Product.create!(
#     title: "Hand Casting Kit Couples - Plaster Hand Mold Casting Kit, DIY Kits for Adults and Kids, Wedding Gifts for Couple",
#     description: "Preserve Precious Memories – Whether it's a bridal shower gift, wedding gift or just some fun for your family, this hand molding kit is a great way to capture the moment. The Dylan & Rylie hand molds casting kit is the ideal baby hand and footprint kit or a sweet gift for couples. It also makes a great Mr. and Mrs. gift, anniversary gift for her or Christmas gifts for parents.",
#     quantity: 10,
#     price: 29.99,
#     seller_id: user1.id
# )


# product8 = Product.create!(
#     title: "Baby Handprint & Footprint Keepsake Photo Frame Kit",
#     description: "A PERFECT HANDPRINT & FOOTPRINT TO CHERISH - Capture the timeless beauty of your baby's tiny little hands and feet with our complete keepsake and photo frame kit - with clay, roller, double-sided tape, stencil kit, table stand, and wall brackets for easy display on a nursery wall, table, or mantel.",
#     quantity: 10,
#     price: 19.95,
#     seller_id: user1.id
# )

# product9 = Product.create!(
#     title: "Husband Wife Mug Gift, Hubby Wifey Mug Wedding Gift, Unique Wedding for Couple",
#     description: "THE BEST GIFTS FOR COUPLES. Awesome wedding gifts, best wedding anniversary gifts you can find at very reasonable price. Best wedding gifts for the couple, honeymoon gifts, bride and groom, They are ac cute and fun couples gift either way that will be great for the newlyweds!",
#     quantity: 10,
#     price: 26.00,
#     seller_id: user1.id
# )

# product10 = Product.create!(
#     title: "Malden International Designs Silkscreened Corinthians Verse Mr & Mrs Wood Picture Frame, 5x7, Off White",
#     description: "ELEGANT DESIGN: Frame holds (1) 5” x 7” vertical Photo within a 4.5” x 6.5” display opening with raised white wood moulding. Features white and light gray MDF wood with a subtle distressed swirl pattern and the phrase “Mr. & Mrs. Love Is Patient Love Is Kind ” screenprinted in gray script text",
#     quantity: 10,
#     price: 17.95,
#     seller_id: user1.id
# )

