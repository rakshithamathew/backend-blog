const get = (req, res) => {
    const fooddata= 
  
  
        [
          {
            id: "1",
            titletext: "Pizza",
            img: "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg",
            
            maintitle: "Food / june 14, 2020"

        },
      
        {
            id: "2",
            titletext: "Soft Drink",
            img: "https://s7g10.scene7.com/is/image/tetrapak/variety-of-ingredients-soft-drink-production?wid=600&hei=338&fmt=jpg&resMode=sharp2&qlt=85,0&op_usm=1.75,0.3,2,0",
            
            maintitle: "Food / june 14, 2020"

        },
        {
            id: "3",
            titletext: "KFC",
            img: "https://b.zmtcdn.com/data/pictures/8/18699298/9410759d611db9c62c3acc23c1f27e06.jpg",
            
            maintitle: "Food / june 14, 2020"

        },
        {
            id: "4",
            titletext: "Pasta",
            img: "https://www.seriouseats.com/thmb/30X5qqBS6U45eBWZh54oPNFd4Tc=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__03__20200224-carretteira-pasta-vicky-wasik-20-956020e359dd49fc81aa0e99c9292043.jpg",
            
            maintitle: "Food / june 14, 2020"

        },
        {
            id: "5",
            titletext: "Dessert",
            img: "https://static.onecms.io/wp-content/uploads/sites/9/2021/10/15/air-fryer-brownies-FT-RECIPE1021-2.jpg",
            
            maintitle: "Food / June 14, 2020"

        },
        {
          id: "6",
          title: "Pizza",
          img: "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg",
          info: "The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, on the border with Campania.[4] Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries",
          moreinfo: "Food"

      },
    
      {
          id: "7",
          title: "Soft Drink",
          img: "https://s7g10.scene7.com/is/image/tetrapak/variety-of-ingredients-soft-drink-production?wid=600&hei=338&fmt=jpg&resMode=sharp2&qlt=85,0&op_usm=1.75,0.3,2,0",
          info: "A soft drink (see § Terminology for other names) is a drink that flavoring. The sweetener may be a sugar, high-fructose corn syrup, fruit juice, a sugar substitute (in the case of diet drinks), or some combination of these. Soft drinks may also contain caffeine, colorings, preservatives, and/or other ingredients.",
          moreinfo: "Food"

      },
      {
          id: "8",
          title: "KFC",
          img: "https://b.zmtcdn.com/data/pictures/8/18699298/9410759d611db9c62c3acc23c1f27e06.jpg",
          info: "KFC (also known as Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville, Kentucky that specializes in fried chicken. It is the world's second-largest restaurant chain (as measured by sales) after McDonald's, with 22,621 locations globally in 150 countries as of December 2019.",
          moreinfo: "Food"

      },
      {
          id: "9",
          title: "Pasta",
          img: "https://www.seriouseats.com/thmb/30X5qqBS6U45eBWZh54oPNFd4Tc=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__03__20200224-carretteira-pasta-vicky-wasik-20-956020e359dd49fc81aa0e99c9292043.jpg",
          info: "Pastas are divided into two broad categories: dried (pasta secca) and fresh (pasta fresca). Most dried pasta is produced commercially via an extrusion process, although it can be produced at home.",
          moreinfo: "Food"

      },
      {
          id: "10",
          title: "Dessert",
          img: "https://static.onecms.io/wp-content/uploads/sites/9/2021/10/15/air-fryer-brownies-FT-RECIPE1021-2.jpg",
          info: " Dessert (/dɪˈzɜːrt/) is a course that concludes a meal. The course consists of sweet foods, such as confections, and possibly a beverage such as dessert wine and liqueur. In some parts of the world, such as much of Central Africa and West Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.",
          moreinfo: "Food"

      }

        //   {
        //    id:"1",
        //    img: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1",
        //    titletext: "Paneer Butter Masala",
        //    maintitle: "Food / January 22, 2022 "
         
         
        //  },
        //  {
        //    id:"2",
        //    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/rajma-recipe.jpg",
        //    titletext: "Rajma Masala",
        //    maintitle: "Food / January 22, 2022 "
       
         
         
        //  },
        //  {
        //    id:"3",
        //    img: "https://images.hindustantimes.com/img/2021/11/26/1600x900/palak_paneer_thumb_1637919968696_1637919979983.jpg" ,
        //    titletext: "Palak Paneer",
        //    maintitle: "Food / January 22, 2022 "
         
         
        //  },
        //  {
        //    id:"4",
        //    img: "http://www.yummyfoodrecipes.in/resources/picture/org/Karnataka-Style-Masala-Dosa.jpg" ,
        //    titletext: "Masala Dosa",
        //    maintitle:"Food / January 22, 2022 "
         
         
        //  },
        //  {
        //    id:"5",
        //    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2019/01/ven-pongal-recipe-1a.jpg" ,
        //    titletext: "Pongal",
        //    maintitle: "Food / January 22, 2022 "
         
         
        //  },
         
         
         // OBJECTS RELATED TO LATEST ARTICLES IN FOOD PAGE
         
        //   {
        //    id:"6",
        //    img: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1" ,
        //    title: "Paneer Butter Masala",
           
        //    moreinfo: "Food / January 22, 2022 "
         
        //  },
        //  {
        //    id:"7",
        //    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/rajma-recipe.jpg" ,
        //    title: "Rajma Masala",
        //    info:"Rajma is rich in molybdenum, iron, copper, folate, manganese, potassium and Vitamin K1. Of these, iron aids in several important functions of the body, while Vitamin K1 is important for blood coagulation.",
        //    moreinfo: "Food/ January 22, 2022 "
         
        //  },
        //   {
        //    id:"8",
        //    img: "https://images.hindustantimes.com/img/2021/11/26/1600x900/palak_paneer_thumb_1637919968696_1637919979983.jpg" ,
        //    title: "Palak Paneer",
        //    info: "Palak paneer (pronounced is a vegetarian dish, consisting of paneer (a type of cottage cheese) in a thick paste made from puréed spinach,",
        //    moreinfo: "Food / January 22, 2022 "
         
        //  },
        //  {
        //    id:"9",
        //    img:"http://www.yummyfoodrecipes.in/resources/picture/org/Karnataka-Style-Masala-Dosa.jpg" ,
        //    title: "Masala Dosa",
        //    info:"Masala dosa is a variation of the popular South Indian dosa, which has its origins in Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar.",
        //    moreinfo: "Food / January 22, 2022 "
         
        //  },
        //  {
        //    id:"10",
        //    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2019/01/ven-pongal-recipe-1a.jpg" ,
        //    title: "Pongal",
        //    info: "Pongal is a delicious South Indian porridge.",
        //    moreinfo: "Food / January 22, 2022 "
         
        //  }
       ]
        
       
        res.send(fooddata);
    }
        
        module.exports.getfoodDetails = get