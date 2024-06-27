const menuData = [
    {
      id: 1,
      category: 'SOUP SPECIAL:',
      items: [
        {id: 1, name: 'NAATUKOZHI SOUP', price: 110.00, image: 'https://i.pinimg.com/736x/fa/bb/c4/fabbc4f9696c2a27d517837401da59cc.jpg' },
        {id: 2, name: 'AATUKAL SOUP', price: 110.00, image: 'https://ajinomoto.co.in/wp-content/uploads/2018/03/Aattukkal-Soup.jpg' },
        {id: 3, name: 'CRAB SOUP', price: 110.00, image: 'https://masarapdin.files.wordpress.com/2011/08/creamy-crab-casserole.jpg' },
        {id: 4, name: 'BAC CHICKEN SOUP', price: 110.00, image: 'https://img.freepik.com/premium-photo/chicken-soup-bowl_245188-346.jpg' },
        {id: 5, name: 'CHICKEN CLEAR SOUP', price: 100.00, image: 'https://mycookalicious.files.wordpress.com/2012/09/clear_chicken_soup.jpg' },
        {id: 6, name: 'HOT AND SOUR CHICKEN SOUP', price: 110.00, image: '/hotsour.jpg' },
        ],
    },
    {
      id: 2,
      category: 'MUTTON SPECIAL:',
      items: [
        {id: 7, name: 'MUTTON PALLIPALAYAM', price: 290.00, image:'/muttonpallipalayam.jpg' },
        {id: 8, name: 'MUTTON PEPPER FRY', price: 290.00, image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/jyothir/Kerala_Mutton_Pepper_Fry.jpg' },
        {id: 9, name: 'MUTTON THALA CURRRY', price:290.00, image: 'https://s3.ap-south-1.amazonaws.com/shopnowchat.com/Medium/637868319349004828_BonelessMuttonThalaCurry.jpg' },
        {id: 10, name: 'MUTTON BOTI CURRY', price: 290.00, image: 'https://i.ytimg.com/vi/a7mI0EZMUxo/maxresdefault.jpg' },
        {id: 11, name: 'MUTTON CHETTINADU', price: 290.00, image: 'https://www.whiskaffair.com/wp-content/uploads/2020/04/Mutton-Kulambu-2-3.jpg' },
        {id: 12, name: 'MUTTON BRAIN FRY', price: 290.00, image: 'https://4.bp.blogspot.com/-oMHIZwxCvdc/VnucXTayleI/AAAAAAAABnU/LtE20qUevgw/s1600/how%2Bto%2Bcook%2Blamb%2Bbrain%2Bmutton%2Bbrain%2Bbeef%2Bbrain%2Bfry%2Bkerala%2Btraditional%2Bstyle%2Bayeshas%2Bkitchen%2Bindian%2Bstyle%2Bbrain%2Bfry.jpg' },
        ],
    },
    {
      id: 3,
      category: 'CHICKEN SPECIAL:',
      items: [
        {id: 13, name: 'CHICKEN 777', price: 220.00, image: 'https://i.pinimg.com/736x/6d/96/ef/6d96efb5c0304ada803289634a99aab1.jpg' },
        {id: 14, name: 'CHICKEN HYDERABAD', price: 220.00, image: 'https://khinskitchen.com/wp-content/uploads/2022/05/Hyderabadi-chicken-04.jpg' },
        {id: 15, name: 'CHICKEN BANGALORE', price:200.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnvS3EnpyFNf8QnNqYtX4rgW40tvdEpNKWJFcsh5fn4w2aZ5iymjB6kIuobhtROw4d9vY&usqp=CAU' },
        {id: 16, name: 'CHICKEN WINGS', price: 210.00, image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Wings-min.jpg' },
        {id: 17, name: 'CHILLI CHICKEN MASALA', price: 210.00, image: 'https://c.ndtvimg.com/2020-01/tlauod6_chilli-chicken_625x300_21_January_20.jpg' },
        {id: 18, name: 'CHICKEN MASALA', price: 210.00, image: 'https://sadhyafoodie.com/wp-content/uploads/2022/06/chicken-masala-recipe.jpeg' },
        ],
    },
    {
      id: 4,
      category: 'TANDOORI CUISINE:',
      items: [
        {id: 19, name: 'TANDOORI CHICKEN FULL', price: 500.00, image: 'https://4.imimg.com/data4/SG/XD/MY-4023169/tandoori-whole-chicken-500x500.jpg' },
        {id: 20, name: 'TANDOORI KABAB FULL', price: 500.00, image: 'https://s3-ap-southeast-1.amazonaws.com/sb-singleserver-prod-bucket/9732166a25855f6bedf53fe7aaf1ea9f/o_1523806043.jpg' },
        {id: 21, name: 'TANDOORI WINGS', price:210.00, image: 'https://4.imimg.com/data4/MO/WB/MY-4023169/tandoori-wing.jpg' },
        {id: 22, name: 'FISH TIKKA', price: 250.00, image: 'https://spicecravings.com/wp-content/uploads/2019/08/Fish-Tikka-6-500x500.jpg' },
        {id: 23, name: 'TANDOORI KAADAI', price: 180.00, image: 'https://i.ytimg.com/vi/YtCo1IuqsWQ/hqdefault.jpg' },
        {id: 24, name: 'TANDOORI CHICKEN HALF', price: 250.00, image: 'https://misaexpress.in/wp-content/uploads/2023/08/TANDOORI-CHICKEN-HALF-Cropped-1.jpg' },
        ],
    },
    {
      id: 5,
      category: 'SEA FOODS SPECIAL:',
      items: [
        {id: 25, name: 'FISH MANJURI', price: 240.00, image: 'https://i0.wp.com/www.antoskitchen.com/wp-content/uploads/2017/01/FISH-MANCHURIAN.jpg?resize=953%2C678&ssl=1' },
        {id: 26, name: 'FISH PEPPER', price: 240.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRheqgNCYnUFfStvpCWtalUK_1Np1_A5lvh1g&usqp=CAU' },
        {id: 27, name: 'CRAB LOLLIPOP', price:250.00, image: 'http://sautefrynbake.com/wp-content/uploads/2016/12/FullSizeRender-62-300x225.jpg' },
        {id: 28, name: 'PRAWNS MANJURI', price: 170.00, image: '/prawnsmanjurian.jpg' },
        {id: 29, name: 'PRAWNS CHILLY', price: 240.00, image: '/Chilli-Prawns.jpg' },
        {id: 30, name: 'CRAB CHILLY', price: 230.00, image: 'https://media.istockphoto.com/id/482141392/photo/chilli-crab-asia-cuisine.jpg?s=612x612&w=0&k=20&c=uyNyuvKw1rxqjkw21hDtnJXt9TXdbkvQZF-XomcM4VI=' },
        ],
    },
    {
      id: 6,
      category: 'BBQ SPECIAL:',
      items: [
        {id: 31, name: 'BBQ CHICKEN', price: 500.00, image: 'https://www.savorynothings.com/wp-content/uploads/2022/05/bbq-chicken-recipe-image-sq.jpg' },
        {id: 32, name: 'BBQ KABAB', price: 500.00, image: 'https://i0.wp.com/www.shanazrafiq.com/wp-content/uploads/2022/05/Chicken-Seekh-Kabab-1.jpg?fit=1920%2C1080&ssl=1' },
        {id: 33, name: 'BBQ LEGS', price:400.00, image: 'https://www.julieseatsandtreats.com/wp-content/uploads/2022/02/BBQ-Air-FryerChicken-Legs-3-of-3.jpg' },
        {id: 34, name: 'BBQ FISH', price: 250.00, image: 'https://www.saveur.com/uploads/2019/09/26/16-220816-PAMU-PESCADO_EMBARAZADO-018-scaled.jpg?auto=webp&width=2000&height=1334' },
        {id: 35, name: 'BBQ PANNEER', price: 225.00, image: 'https://www.cookwithkushi.com/wp-content/uploads/2023/02/tandoori_paneer_tikka_restaurant_style.jpg' },
        {id: 36, name: 'BBQ KAADA', price: 250.00, image: 'https://i.ytimg.com/vi/oj7L4xUV7cM/mqdefault.jpg' },
        ],
    },
    {
      id: 7,
      category: 'EGG SPECIAL:',
      items: [
        {id: 37, name: 'EGG DYNAMITE', price: 140.00, image: 'https://i.ytimg.com/vi/6C5INOVF_z0/maxresdefault.jpg' },
        {id: 38, name: 'EGG CHILLY', price: 120.00, image: 'https://d3gy1em549lxx2.cloudfront.net/da56401c-649f-41dc-9648-7d83208adaa5.JPG' },
        {id: 39, name: 'EGG PEPPER', price:140.00, image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/04/egg.jpg' },
        {id: 40, name: 'EGG MASALA', price: 150.00, image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Egg-Masala.jpg' },
        {id: 41, name: 'EGG BHURJI', price: 65.00, image: 'https://www.ruchifoodline.com/recipes//cdn/recipes/Egg-Bhurji-1-3.jpg' },
        {id: 42, name: 'DOUBLE OMLETE', price: 60.00, image: 'https://cdn.dotpe.in/longtail/store-items/8058715/7seOxtaK.jpeg' },
        ],
    },
    {
      id: 8,
      category: 'RICE & NOODLES SPECIAL:',
      items: [
        {id: 43, name: 'PRAWNS BIRIYANI', price: 250.00, image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/12/Prawn-Biryani-Recipe.jpg' },
        {id: 44, name: 'KAADAI BIRIYANI', price: 250.00, image: 'https://simpleindianrecipes.com/portals/0/sirimages/Kaadai-Biriyani-M.jpg' },
        {id: 45, name: 'MUTTON BIRIYANI', price:230.00, image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe-500x500.jpg' },
        {id: 46, name: 'CHICKEN BIRIYANI', price: 170.00, image: 'https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop-500x500.jpg' },
        {id: 47, name: 'MIXED FRIED NOODLES', price: 190.00, image: 'https://www.whiskaffair.com/wp-content/uploads/2021/04/Cantonese-Pan-Fried-Noodles-2-3.jpg' },
        {id: 48, name: 'CHICKEN FRIED NOODLES', price: 170.00, image: 'https://recipes.net/wp-content/uploads/portal_files/recipes_net_posts/2021-04/chicken-noodle-stir-fry-recipe.jpg' },
        ],
    },

  
  ];
  export default menuData;
  