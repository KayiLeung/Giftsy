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
Rating.delete_all
# ApplicationRecord.connection.reset_pk_sequence!('users')

category1 = Category.create!(title: 'Wedding')
categorypic1 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/wedding.jpg')
category1.photo.attach(io: categorypic1, filename: 'wedding.jpg')

category2 = Category.create!(title: "Father's Day")
category3 = Category.create!(title: "Mother's Day")

category4 = Category.create!(title: "Birthday")
categorypic4 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/happy-birthday-cupcake.jpg')
category4.photo.attach(io: categorypic4, filename: 'happy-birthday-cupcake.jpg')

category5 = Category.create!(title: "New Born")
categorypic5 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/newborn.jpg')
category5.photo.attach(io: categorypic5, filename: 'newborn.jpg')

category6 = Category.create!(title: "Anniversary")
category7 = Category.create!(title: "Housewarming")
category8 = Category.create!(title: "Retirement")

categoryRandom = Category.create!(title: "Lucky Pick")

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

product7 = Product.create!(
    title: "Hand Casting Kit Couples - Plaster Hand Mold Casting Kit, DIY Kits for Adults and Kids, Wedding Gifts for Couple",
    description: "Preserve Precious Memories – Whether it's a bridal shower gift, wedding gift or just some fun for your family, this hand molding kit is a great way to capture the moment. The Dylan & Rylie hand molds casting kit is the ideal baby hand and footprint kit or a sweet gift for couples. It also makes a great Mr. and Mrs. gift, anniversary gift for her or Christmas gifts for parents.",
    quantity: 10,
    price: 29.99,
    seller_id: user1.id,
    category_id: category5.id
)
productpic7 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new_born_1.jpg')
product7.photo.attach(io: productpic7, filename: 'new_born_1.jpg')


product8 = Product.create!(
    title: "Baby Handprint & Footprint Keepsake Photo Frame Kit",
    description: "A PERFECT HANDPRINT & FOOTPRINT TO CHERISH - Capture the timeless beauty of your baby's tiny little hands and feet with our complete keepsake and photo frame kit - with clay, roller, double-sided tape, stencil kit, table stand, and wall brackets for easy display on a nursery wall, table, or mantel.",
    quantity: 10,
    price: 19.95,
    seller_id: user1.id,
    category_id: category5.id

)
productpic8 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new_born_gift_2.jpg')
product8.photo.attach(io: productpic8, filename: 'new_born_gift_2.jpg')

product9 = Product.create!(
    title: "Husband Wife Mug Gift, Hubby Wifey Mug Wedding Gift, Unique Wedding for Couple",
    description: "THE BEST GIFTS FOR COUPLES. Awesome wedding gifts, best wedding anniversary gifts you can find at very reasonable price. Best wedding gifts for the couple, honeymoon gifts, bride and groom, They are ac cute and fun couples gift either way that will be great for the newlyweds!",
    quantity: 10,
    price: 26.00,
    seller_id: user1.id,
    category_id: category1.id
)
productpic9 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/wedding_gift_1.jpg')
product9.photo.attach(io: productpic9, filename: 'wedding_gift_1.jpg')

product10 = Product.create!(
    title: "Malden International Designs Silkscreened Corinthians Verse Mr & Mrs Wood Picture Frame, 5x7, Off White",
    description: "ELEGANT DESIGN: 
    Frame holds (1) 5” x 7” vertical Photo within a 4.5” x 6.5” display opening with raised white wood moulding. 
    Features white and light gray MDF wood with a subtle distressed swirl pattern and the phrase “Mr. & Mrs. Love Is Patient Love Is Kind ” 
    screenprinted in gray script text",
    quantity: 10,
    price: 17.95,
    seller_id: user1.id,
    category_id: category1.id
)
productpic10 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/wedding_gift.jpg')
product10.photo.attach(io: productpic10, filename: 'wedding_gift.jpg')

product11 = Product.create!(
    title: 'Custom Family & Pet Name Welcome Mat | Custom Names Doormat | Welcome Mat | Housewarming Gift | ', 
    description: "The perfect decoration for any front porch that can be personalized.

Makes a great gift for him, her, nana and papa, weddings, housewarming, mothers day and more. The perfect gift for any new or existing home owner.", 
    quantity: 10, 
    price: 19.99, 
    seller_id: user3.id,
    category_id: category7.id
)
productpic11 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/housewarming_2.jpg')
product11.photo.attach(io: productpic11, filename:'housewarming_2.jpg')

product12 = Product.create!(
    title: 'Personalized, Engraved Cutting Board with Wreath Design for Housewarming', 
    description: "Create a cherished family heirloom with this engraved, name and date cutting board! We will take your name and date and laser engrave it into our high quality, hardwood cutting boards. The perfect gift to remember a loved one!", 
    quantity: 10, 
    price: 27.99, 
    seller_id: user3.id,
    category_id: category7.id
)
productpic12 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/housewarming_1.jpeg')
product12.photo.attach(io: productpic12, filename:'housewarming_1.jpeg')

product13 = Product.create!(
    title: 'Retired Long Sleeve Shirt, Retirement Gift,Funny Retirement Long Sleeve Shirt, Retiree Gift ,Retired Quotes, Retired Not My Problem Anymore', 
    description: "Retired. Officially retired. It's the first day of the rest of your life and we've got you covered with this super-soft, unisex shirt. Perfect for retirement parties, retiree gifts, and any other occasion that calls for a little celebration.",
    quantity: 10, 
    price: 14.99, 
    seller_id: user3.id,
    category_id: category8.id
)
productpic13 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/retiredment_2.jpg')
product13.photo.attach(io: productpic13, filename:'retiredment_2.jpg')

product14 = Product.create!(
    title: 'Not My Problem Anymore Im Retired Round Rocks Glass-Retirement Gift for Men, Just Retired Glass, Gift For Retirement, Old Fashioned Glass', 
    description: "This Not My Problem Anymore Im Retired Round Rocks Glass is laser etched creating a beautiful frosted effect that is dishwasher safe and will hold up for years.",
    quantity: 10, 
    price: 16.99, 
    seller_id: user3.id,
    category_id: category8.id
)
productpic14 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/retirement_1.jpg')
product14.photo.attach(io: productpic14, filename: 'retirement_1.jpg')

product15 = Product.create!(
    title: 'Retirement Gift Box | Succulent Gift Box | Retirement | Retirement Gift | Gift for Retiree | Send a Gift', 
    description: 'Is there someone you think is truly awesome – a coworker, friend, neighbor? Then let them know by sending them one of our truly lovely gift boxes packed with thoughtful items …. and we can mail directly to them!',
    quantity: 10, 
    price: 36.80, 
    seller_id: user4.id,
    category_id: category8.id
)
productpic15 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-retirment1.jpg')
product15.photo.attach(io: productpic15, filename: 'new-db/new-retirement1.jpg')
# new-retirement1   
# aws link is not working

product16 = Product.create!(
    title: 'Funny Retirement Card - Fucking Quitter', 
    description: 'NOTE: All cards are printed without censoring. If you would like the card printed with censoring please leave a note to seller.
Thank You

Card Size measures 4.25 x 5.5 inches (size A2 Folded)
Shipped with a Kraft Envelope
Printed on High Quality Acid-Free White Cardstock
Inside is Blank',
    quantity: 10, 
    price: 4.00, 
    seller_id: user4.id,
    category_id: category8.id
)
productpic16 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-retirement2.jpg')
product16.photo.attach(io: productpic16, filename: 'new-db/new-retirement2.jpg')
#new-retirement2

product17 = Product.create!(
    title: 'Pairs well with Retirement. Retirement gift for her. Retirement gift for him. Funny retirement gift.', 
    description: "Hi there! Thanks for shopping The Pretty Little Mess!

**This listing is for the label only.**

♥ABOUT OUR LABELS♥

Our labels are water-resistant and repositionable!
Need to chill your wine or keep it in the fridge, no problem!
Didn't place it right the first time, no problem!
Our labels are so simple... they simply peel and stick!
All labels come cut to the specific size you ordered to fit your bottle with ease.

♥AVAILABLE SIZES♥

Our Large and Small Wine Labels will fit most standard 750ml bottles of wine. Best to select a bottle with straight edges to prevent your label from wrinkling.

Our Champagne labels will fit most standard champagne and prosecco bottles. Best to select a bottle with the least amount of curving to prevent wrinkles. We also recommend this label for Sutter Home Mini wines, and beer bottles.",
    quantity: 10, 
    price: 2.50, 
    seller_id: user4.id,
    category_id: category8.id
)
productpic17 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-retirment3.jpg')
product17.photo.attach(io: productpic17, filename: 'new-db/new-retirment3.jpg')
#new-retirement3

product18 = Product.create!(
    title: 'Queen Has Retired-Socks-Retired AF-Retirement Gift-Retirement Socks-Retired 2022-Retirement Party-Funny Retirement-65th Birthday', 
    description: "Welcome to If the Sock Fitz - We specialize in finding you the perfect pair of socks for any occasion (or no occasion at all)!
These comfortable and warm socks are perfect for the person retiring in your life!
Be stylish and send the right message all at the same time. Put your feet up and let your socks do the talking!
",
    quantity: 10, 
    price: 16.89, 
    seller_id: user4.id,
    category_id: category8.id
)
productpic18 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-retirment4.jpg')
product18.photo.attach(io: productpic18, filename: 'new-db/new-retirement4.jpg')
# new-retirement4

product19 = Product.create!(
    title: 'Personalized Retirement Beer Glass - Retirement Gift, Custom Year, Etched Pint Glasses, Retirement Gifts for Men or Women, Design: RETIRED', 
    description: 'RETIREMENT GIFTS BEER GLASS ITEM DETAILS

These glass mugs are etched with our popular retired design. By etching the glass, it creates a permanent effect that is dishwasher safe and will last a lifetime! Snag these retirement coffee mugs for your coworker, boss, friend or loved one!

-Glasses are dishwasher safe
-Engraving is permanent and requires no maintenance
-Each glass comes carefully packaged
-Great gifts for retired Dad, Boss, Friend, or Colleague',
    quantity: 10, 
    price: 12.41, 
    seller_id: user4.id,
    category_id: category8.id
)
productpic19 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-retirment5.jpg')
product19.photo.attach(io: productpic19, filename: 'new-db/new-retirement5.jpg')
# new-retirement5

product20 = Product.create!(
    title: 'Retirement Gift for Men or Women | Work Anniversary Gift | Retirement Card Poster Sign | Retirement Party Decoration | ANY YEAR | Digital', 
    description: 'Retirement Gift for Men or Women | Work Anniversary Gift | Retirement Card Poster Sign | Retirement Party Decoration | ANY YEAR | Digital AVAILABLE FOR ANY YEAR!',
    quantity: 10, 
    price: 36.80, 
    seller_id: user4.id,
    category_id: category8.id
)
productpic20 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-retirment6.jpg')
product20.photo.attach(io: productpic20, filename: 'new-db/new-retirement6.jpg')
# new-retirement6

product21 = Product.create!(
    title: 'Housewarming Gift Glassware| Personal Housewarming Beer & Wine Glasses | Recent Move or New Home | Multiple Glassware and Designs Available', 
    description: 'HOUSEWARMING GIFT:

This unique housewarming gift is intended to cater to those looking for an engravement on a glass that is more personalized than you can find elsewhere. Our design was inspired by housewarming gifts that are specific to the last name and new location one is moving to.

ENGRAVED GLASSES:

We offer a variety of hand crafted glassware that is paired with the state design of your choice. Every glass is made to order and professionally hand engraved in the middle of each glass. Give a gift your loved ones will appreciate and that is sure to last a lifetime.',
    quantity: 10, 
    price: 10.95, 
    seller_id: user2.id,
    category_id: category7.id
)
productpic21 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-housewarming1.jpg')
product21.photo.attach(io: productpic21, filename: 'new-db/new-housewarming1.jpg')
# housewarming1

product22 = Product.create!(
    title: 'Home portrait, house painting, housewarming gift, our first home sign, home sweet home sign, watercolor home, house portrait, realtor gift', 
    description: '(Home portrait, house painting, housewarming gift, our first home sign, home sweet home sign, watercolor home, house portrait, realtor gift)',
    quantity: 10, 
    price: 19.99, 
    seller_id: user4.id,
    category_id: category7.id
)
productpic22 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-housewarming2.jpg')
product22.photo.attach(io: productpic22, filename: 'new-db/new-housewarming2.jpg')
# housewarming2

product23 = Product.create!(
    title: 'Personalized First Home Christmas Ornament / Address / Housewarming Gift / Clay', 
    description: "The perfect simple ornament to adorn your tree in your first home! Each ornament is hand stamped and personalized with the address and year of your choosing. Made from a custom rustic blend of polymer clay, these ornaments are durable and will withstand drops and falls off the tree. Because kids and cats happen! Tied with natural jute twine, this will be a treasured keepsake for years and years to come.

Each ornament is hand made and hand stamped, so please do not anticipate machine made symmetry and perfection. In fact, we LOVE all things imperfectly perfect here, so small variances in each ornament make them full of character and uniquely charming.

Please include only your street address in the personalization box. Most addresses will fit onto the ornament, but if you have a particularly long address please know that I may reach out to make sure we can make your design as beautifully fit as possible.",
    quantity: 10, 
    price: 25.00, 
    seller_id: user2.id,
    category_id: category7.id
)
productpic23 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-housewarming3.jpg')
product23.photo.attach(io: productpic23, filename: 'new-db/new-housewarming3.jpg')
# new-housewarming3

product24 = Product.create!(
    title: 'Wood World Map Wall Art Large Wall Decor Weltkarte Holz Travel Home Decor Housewarming Gift Anniversary Gift For Husband, Him Enjoy The Wood', 
    description: 'Wood World Map Wall Art Large Wall Decor Weltkarte Holz Travel Home Decor Housewarming Gift Anniversary Gift For Husband, Him Enjoy The Wood

If you feel your home lacks the modern centerpiece detail this is it. Made of high-quality birch plywood with flawless engraving details 3D Wooden World Map is the most amazing decor for any interior: minimalistic, meaningful, and really inspiring! Truly admired by homies and travelers.

Wood World Map was created to become the perfect present for travelers with great taste in interior design. Explore the world from the comfort of your own home with our Map!',
    quantity: 10, 
    price: 39.50, 
    seller_id: user2.id,
    category_id: category7.id
)
productpic24 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-housewarming4.jpg')
product24.photo.attach(io: productpic24, filename: 'new-db/new-housewarming4.jpg')
# new-housewarming4

product25 = Product.create!(
    title: 'Flower Resin Coasters | Unique Coasters Set | Black Resin Coasters | Floral Coasters | Housewarming Gift - Gift for Teacher', 
    description: 'Welcome to HomemadeFate! We’re a small, mother-daughter company that specializes in homemade resin products! Our black and gold flower coasters are made with clear epoxy resin. You can choose between a coaster set of 2,3,4 or 6 and if you don’t want a set, we offer single coasters as well! These unique flower coasters are a perfect addition to your home this summer!

Colors:
1. Black Shimmer
2. Gold Flakes

Materials: We use clear epoxy resin with gold flakes in the middle. We use a gold permanent marker for the trim!',
    quantity: 10, 
    price: 10.50, 
    seller_id: user4.id,
    category_id: category7.id
)
productpic25 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-housewarming5.jpg')
product25.photo.attach(io: productpic25, filename: 'new-db/new-housewarming5.jpg')
# new-housewarming5

product26 = Product.create!(
    title: 'Funny Home Decor | Funny Housewarming Gift | Prank Gift | Housewarming Gift | House Warming Gift', 
    description: 'This funny Jesus home decor is the best prank gift for friends. Leave somewhere at the next housewarming party you attend or stealthily place in a friends house.

Our Jesus door hanger measures 8.5” wide by 6.7” tall and fits on the left side of standard door frames. There is no need to physically attach the item as it sits by itself without adhesive.

It is made from 1/4” thick plywood and has a solid black back.

Item is cut and engraved in our home studio.',
    quantity: 10, 
    price: 19.95, 
    seller_id: user1.id,
    category_id: category7.id
)
productpic26 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-housewarming6.jpg')
product26.photo.attach(io: productpic26, filename: 'new-db/new-housewarming6.jpg')
# new-housewarming6

product27 = Product.create!(
    title: 'Embroidered Anniversary Date Hoodie, Roman Numerals Couples Sweatshirt, Gifts for Her, Gifts for Him, Valentines Gift, Khaki Hoodie,', 
    description: 'THIS LISTING IS FOR ONE HOODIE

Embroidered Anniversary Date Hoodie, Roman Numerals Anniversary Date Sweatshirt, Gifts for Her, Gifts for Him, Anniversary GIft, Wedding Gift',
    quantity: 10, 
    price: 40.00, 
    seller_id: user4.id,
    category_id: category6.id
)
productpic27 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-anniversary1.jpg')
product27.photo.attach(io: productpic27, filename: 'new-db/new-anniversary1.jpg')
# anniversary1

product28 = Product.create!(
    title: 'Personalised Couple Print, Couples Gift, Gift for Her, Boyfriend Girlfriend Print, Customised Couple Gift, , Anniversary Gift, Valentine', 
    description: "★ PERSONALISED COUPLES PRINT ★


SIZING
-----------------------------------------------------
• 8 x 10 inches
• A5 - 5.8 x 8.3 inches, 14.8 x 21.0 cm
• A4 - 8.27 x 11.69 inches, 21.0 x 29.7cm
• A3 - 11.69 x 16.53 inches, 29.7 x 42.0cm
• A2 - 16.53 x 23.39 inches, 42.0 x 59.4cm
• A1 - 23.39 x 33.11 inches, 59.4 x 84.1cm

* Please contact us if you require a size that is not listed",
    quantity: 10, 
    price: 7.65, 
    seller_id: user4.id,
    category_id: category6.id
)
productpic28 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-anniversary2.jpg')
product28.photo.attach(io: productpic28, filename: 'new-db/new-anniversary2.jpg')
# anniversary2


product30 = Product.create!(
    title: 'Personalized 3D Illusion Lamp Gift for Her. Custom Acrylic Lamp Gift. 3D Night Light Gift for Wife. Custom Led Lamp Gift for Girlfriend.', 
    description: "❤ This 3D Illusion Lamp personalized as a gift for her. A beautiful 3D Night light can be bought as a gift for wife. Customized Led Lamp for a Girlfriend.

❤ If you want to give a special gift to your girlfriend or boyfriend, then you are in the right place. You can prefer this customized led lamp as a gift for your wife or husband. This would be the best surprise for your beloved ones on Valentina's Day. Also, this present is suitable for the anniversary day of your mother and father. Our first duty is to make you pleasant. Therefore, we customize this led lamp for your pleasure.",
    quantity: 10, 
    price: 40.80, 
    seller_id: user4.id,
    category_id: category6.id
)
productpic30 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-anniversary3.jpg')
product30.photo.attach(io: productpic30, filename: 'new-db/new-anniversary3.jpg')
# anniversary3

product31 = Product.create!(
    title: 'custom line drawing from photo, custom wedding line art, custom newlyweds line drawing, anniversary gift, personalized hand drawn art', 
    description: "⚡ CUSTOM LINE ART IS 100% HAND-DRAWN BY A PROFESSIONAL DESIGNER ⚡

THIS IS DIGITAL FILE, NO PHYSICAL PRODUCT WILL BE SHIPPED (print + ship available, see below)

PROCESS
1. Purchase listing
2. Send your picture via Etsy messages (remember this is line art, so details like faces will not be included)
3. Your final art will be sent to the email address on your Etsy account within 3-10 business days
4. You will receive your art as 8x10 unless you specify another size",
    quantity: 10, 
    price: 30.00, 
    seller_id: user2.id,
    category_id: category6.id
)
productpic31 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-anniversary4.jpg')
product31.photo.attach(io: productpic31, filename: 'new-db/new-anniversary4.jpg')
# anniversary4

product32 = Product.create!(
    title: 'Personalized Valentines Day Gift / Love Couples Name Pallet Sign / Boyfriend Girlfriend Gift / Fiance Wedding Anniversary Gift / Custom Name', 
    description: "This Couples Name Pallet Sign makes a great gift for your Fiance, Boyfriend or Girlfriend. This Custom Wood Sign is a great, simple idea for a Wedding, Anniversary or Valentine's Day. Not married yet? This can also be a great gift idea for your Fiance, Boyfriend or Girlfriend.",
    quantity: 10, 
    price: 36.00, 
    seller_id: user1.id,
    category_id: category6.id
)
productpic32 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-anniversary5.jpg')
product32.photo.attach(io: productpic32, filename: 'new-db/new-anniversary5.jpg')
# anniversary5

product33 = Product.create!(
    title: 'Reasons why I love you, valentines day gift, boyfriend, husband, wife, partner, gifts for him, love, scrapbook, memories, journal, our story', 
    description: "The perfect gift for someone who doesn't like a lot of fuss on Valentines day, yet still appreciates a thoughtful sentiment. The Little Book of Us is a mini scrapbook enabling you to capture your love story so far. Tell them the reasons you love them, record the milestones of your journey together and note down some of your most treasured memories using the prompts in this little book.

With a plain, elegant and timeless design, this makes a beautiful gift for him on valentines day. It's also popular for first anniversaries, birthdays, or 'just because…'

For every page with prompts, there is a blank page beside for those of you who do want to use this like a scrapbook (however as you can see from the pictures, it is equally lovely if you just prefer to fill out the text sections.",
    quantity: 10, 
    price: 14.09, 
    seller_id: user4.id,
    category_id: category6.id
)
productpic33 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/new-anniversary6.jpg')
product33.photo.attach(io: productpic33, filename: 'new-db/new-anniversary6.jpg')
# anniversary6

product34 = Product.create!(
    title: 'Actual Baby Footprint Necklace Stamp in Gold / Silver / Rose Gold, Birthstone Locket Coin Handprint Kids Name Engraved Birthday Day Necklace', 
    description: 'Baby Footprint Birthstone Necklace in Gold / Silver / Rose Gold, Locket Coin Handprint Kids Name Engraved Birthday Memorial Day Necklace',
    quantity: 10, 
    price: 26.64, 
    seller_id: user4.id,
    category_id: category5.id
)
productpic34 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/newborn1.jpg')
product34.photo.attach(io: productpic34, filename: 'new-db/newborn1.jpg')
# newborn1


product35 = Product.create!(
    title: 'PERSONALIZED Baby Bathrobe -Animal -Infant Bath robe -Custom Monogram /Name Embroidered Gift /Elephant /Infant /Baby Shower /Baby Bath Robe', 
    description: 'FREE Personalized Name or Monogram on the front of the bathrobe !

Personalization of the BACK of the Robe at extra cost.

This adorable hooded bathrobe is made of super soft plush fabric to keep baby snug and warm! Bathrobe features a Giraffe print, hood with animal ears and a sash tie. The generously sized robe fits most babies size 0 - 9 months. Perfect for after bath or pool time. Makes a great gift for a precious new baby!
Generously sized robe fits 0 - 9 months
Hood features animal ears
Beige and white Giraffe print
Machine washable',
    quantity: 10, 
    price: 22.49, 
    seller_id: user4.id,
    category_id: category5.id
)
productpic35 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/newborn2.jpg')
product35.photo.attach(io: productpic35, filename: 'new-db/newborn2.jpg')
# newborn2

product36 = Product.create!(
    title: 'Personalized Baby Blanket, Rosewater Pink Hide Minky and You Choose Minky Dot Color, Newborn Girl gift, Baby Shower Gift, BOW NOT INCLUDED', 
    description: "Welcome to Baby Boo's!

Featured Blanket :
Our Minky Blanket has a designer Rosewater Hide Minky and Super Soft Minky Back that you will choose the color for. Our minky and blankets are handmade in the USA. Blankets can be used as your baby grows and often become a treasure used for many years to come.We offer a variety of fun and fresh designer prints pairing them with minky backs. We combine originality with functionality for both mom and baby.",
    quantity: 10, 
    price: 24.00, 
    seller_id: user3.id,
    category_id: category5.id
)
productpic36 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/newborn3.jpg')
product36.photo.attach(io: productpic36, filename: 'new-db/newborn3.jpg')
# newborn3


product37 = Product.create!(
    title: 'Personalized Toy Gifts, Puzzle Piece Names, Custom Wooden Baby Name Puzzle for Toddlers, Baby Keepsake, Best Baby Gift, Toys for 18 Months', 
    description: "A well designed name puzzle will be a unique toy gift for 1-4 years old. It's could be a great early learning toy and beautiful name sign as nursery decor.

As listed is a personalized wooden name puzzle with 2 lines of adorable animal heads. Babies could learn to spell their names and tell animals while playing with this name puzzle. Below the animals, the name of each will be laser engraved so it could also be played as a matching game.",
    quantity: 10, 
    price: 14.40, 
    seller_id: user3.id,
    category_id: category5.id
)
productpic37 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/newborn4.jpg')
product37.photo.attach(io: productpic37, filename: 'new-db/newborn4.jpg')
# newborn4



product38 = Product.create!(
    title: '3 Piece Fox Rattle | New Born Gift | Baby Gift | Easter Baby Gift | 100% Cotton Crochet | Rattle Set | Handmade Toy | Baby rattle | Eco', 
    description: "BPA free Wooden Crochet baby Rattle.

- Designed for newborn babies and sensitive little ones. All our crochet rattle sets are made from eco friendly beech wood and 100% cotton yarn. Perfect for children with allergies.

- Handmade and untreated.

- Promotes your babies hand eye coordination and helps differentiate between shapes, sizes, colours and textures engaging all the senses.

- The sound of the rattle will keep the baby entertained for hours.",
    quantity: 10, 
    price: 34.34, 
    seller_id: user3.id,
    category_id: category5.id
)
productpic38 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/newborn6.jpg')
product38.photo.attach(io: productpic38, filename: 'new-db/newborn6.jpg')
# newborn6


product39 = Product.create!(
    title: 'Personalized bunny | baby shower gift | stuffed animal | Easter Basket | baby boy gift | baby girl gift| Sweet Nibble |Custom Baby Gift', 
    description: "Sweet Nibble Size bunny. This is our largest size bunny.

Best Baby Shower Gift! Beautiful stuffed bunny with name embroidered on the ear. Bunnies By The Bay provides me with a gorgeous plush bunny, then we make it even more special by adding your child's name to an ear. Beautiful keepsake gift.

EMBROIDERY SHOWS ON THE BACK OF THE EAR. IT IS NOT HIDDEN.
",
    quantity: 10, 
    price: 39.80, 
    seller_id: user3.id,
    category_id: category5.id
)
productpic39 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/newborn5.jpg')
product39.photo.attach(io: productpic39, filename: 'new-db/newborn5.jpg')
# newborn5

product40 = Product.create!(
    title: "Unique Wedding Gift for Couple - USA Photo Map - FREE SHIPPING", 
    description: "==== 𝗠𝗮𝗽 𝗱𝗲𝘁𝗮𝗶𝗹𝘀 ====

• Measures - 24 x 36 inches
• Available in gray and blue colors
• Includes a set of glue dots to attach photos
• Comes rolled in a cardboard gift tube
• Comes without a frame, fits 24 x 36 frames

==== 𝗛𝗼𝘄 𝘁𝗼 𝘂𝘀𝗲 𝘁𝗵𝗲 𝗺𝗮𝗽? ====

𝟭. Cut out your travel photos
𝟮. Stick photos to the background with included glue dots
𝟯. Place the upper plastic map over the background
𝟰. Put the map in a frame (not included)",
    quantity: 10, 
    price: 48.99, 
    seller_id: user2.id,
    category_id: category1.id
)
productpic40 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/wedding2.jpg')
product40.photo.attach(io: productpic40, filename: 'new-db/wedding2.jpg')
# wedding2

product41 = Product.create!(
    title: "Surname Wedding Neon Sign, Wedding Decoration, Reception LED Sign, Neon Sign Custom, Wedding Backdrop Neon Light, Wedding Gift, Home Decor", 
    description: "❗️❗️This product listing is a special offer with low margin as a blessing to the wedding couples. We ONLY accept family names as content for this listing

【Standard order】Ship out in 1-2 weeks.
【Rush order + $40】Ship out in 3-5 days.
✈️ Delivery by DHL/Fedex/TNT takes 3-7 days.",
    quantity: 10, 
    price: 43.80, 
    seller_id: user2.id,
    category_id: category1.id
)
productpic41 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/wedding1.jpg')
product41.photo.attach(io: productpic41, filename: 'new-db/wedding1.jpg')
# wedding1

product42 = Product.create!(
    title: "Personalized Bamboo Cheese Board Set / Charcuterie Board Set, Custom Engraved Cutting Board, Wedding gifts, Christmas gifts, Couple Gifts", 
    description: "You’ll be so excited to unwrap this high quality, thoughtfully designed bamboo cheese board. This comes with an adorable slide out drawer with initialed specialty knives, slates, markers and a wine opener. Packed lovingly, as a luxury item deserves, you’ll also get a white cloth bag to keep the wooden cheese tray in.

The personalization makes it so much more special than any plain board. You’ll be eager to give this high-quality gift, because it comes out gorgeous.",
    quantity: 10, 
    price: 39.99, 
    seller_id: user2.id,
    category_id: category1.id
)
productpic42 = URI.open('https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/new-db/wedding3.jpg')
product42.photo.attach(io: productpic42, filename: 'new-db/wedding3.jpg')
# wedding3

# product40 = Product.create!(
#     title: "", 
#     description: "",
#     quantity: 10, 
#     price: 40.80, 
#     seller_id: user2.id,
#     category_id: category1.id
# )
# productpic40 = URI.open('')
# product40.photo.attach(io: productpic40, filename: '')
# # wedding4

# product40 = Product.create!(
#     title: "", 
#     description: "",
#     quantity: 10, 
#     price: 40.80, 
#     seller_id: user2.id,
#     category_id: category1.id
# )
# productpic40 = URI.open('')
# product40.photo.attach(io: productpic40, filename: '')
# # wedding5

# product40 = Product.create!(
#     title: "", 
#     description: "",
#     quantity: 10, 
#     price: 40.80, 
#     seller_id: user2.id,
#     category_id: category1.id
# )
# productpic40 = URI.open('')
# product40.photo.attach(io: productpic40, filename: '')
# # wedding6







rating1 = Rating.create!(score: 4 ,buyer_id: user2.id,product_id: product1.id ,comment:'Love it!')
rating2 = Rating.create!(score: 5 ,buyer_id: user4.id,product_id: product2.id ,comment:'Love it!')
rating3 = Rating.create!(score: 5 ,buyer_id: user3.id,product_id: product3.id ,comment:'Love it!')
rating4 = Rating.create!(score: 3 ,buyer_id: user4.id,product_id: product4.id ,comment:'Love it!')
rating5 = Rating.create!(score: 4 ,buyer_id: user1.id,product_id: product5.id ,comment:'Love it!')
rating6 = Rating.create!(score: 5 ,buyer_id: userDemo.id,product_id: product6.id ,comment:'Love it!')
rating7 = Rating.create!(score: 5 ,buyer_id: userDemo.id,product_id: product7.id ,comment:'Love it!')
rating8 = Rating.create!(score: 5 ,buyer_id: userDemo.id,product_id: product8.id ,comment:'Love it!')
rating9 = Rating.create!(score: 5 ,buyer_id: userDemo.id,product_id: product9.id ,comment:'Love it!')
rating10 = Rating.create!(score: 5 ,buyer_id: userDemo.id,product_id: product10.id ,comment:'Great product and shift for a friend. Requested for them to make sure the lettering is darker and not too light and they made a note for it to be checked for that prior to shipping. It turned out great! They are very understanding. Thank you guys!!!')
rating11 = Rating.create!(score: 5 ,buyer_id: userDemo.id,product_id: product11.id ,comment:'Love it!')
rating12 = Rating.create!(score: 5 ,buyer_id: userDemo.id,product_id: product12.id ,comment:'Love it!')
rating13 = Rating.create!(score: 5 ,buyer_id: userDemo.id,product_id: product13.id ,comment:'Love it!')
rating14 = Rating.create!(score: 5 ,buyer_id: userDemo.id,product_id: product14.id ,comment:'Love it!')
rating16 = Rating.create!(score: 4 ,buyer_id: user1.id,product_id: product15.id ,comment:'Love it!')
rating17 = Rating.create!(score: 4 ,buyer_id: user1.id,product_id: product16.id ,comment:'Great product and shift for a friend. Requested for them to make sure the lettering is darker and not too light and they made a note for it to be checked for that prior to shipping. It turned out great! They are very understanding. Thank you guys!!!')
rating18 = Rating.create!(score: 4 ,buyer_id: user1.id,product_id: product17.id ,comment:'Love it!')
rating19 = Rating.create!(score: 4 ,buyer_id: user1.id,product_id: product18.id ,comment:'Love it!')
rating20 = Rating.create!(score: 4 ,buyer_id: user1.id,product_id: product19.id ,comment:'Great product and shift for a friend. Requested for them to make sure the lettering is darker and not too light and they made a note for it to be checked for that prior to shipping. It turned out great! They are very understanding. Thank you guys!!!')
