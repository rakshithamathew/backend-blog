const get = (req, res) => {

    const tourismdata=
        [
          
          {
            id: "1",
            titletext: "BENGALURU",
            img: "https://www.commercialofficebangalore.com/sites/default/files/Office_Location.jpg",
  
            maintitle: "Tourism"

        },
        {
            id: "2",
            titletext: "DELHI",
            img: "https://institute.careerguide.com/wp-content/uploads/2020/08/F6DC4613-C002-49C8-918BD271C794DC34.jpg",
      
            maintitle: "Tourism"

        },
        {
            id: "3",
            titletext: "JAMMU & KASHMIR",
            img: "https://www.worldatlas.com/upload/70/33/ab/shutterstock-115227475.jpg",
      
            maintitle: "Tourism"

        },
        {
            id: "4",
            titletext: "GOA",
            img: "https://media.timeout.com/images/105240186/750/422/image.jpg",
      
            maintitle: "Tourism"

        },
        {
            id: "5",
            titletext: "JAIPUR",
            img: "https://lh3.googleusercontent.com/FqXvailyyIAehQ2Imh_8G1lU8hc-Yy-EQ8iZtNocgLaYD_cmVreNAttCWuxwu8Nm",
            maintitle: "Tourism"

        },

        //   {
        //     id:"1",
        //     img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        //     titletext: "Kerala",
        //     maintitle: "Tourism / January 22, 2022 "
          
          
        //   },
        //   {
        //     id:"2",
        //     img: "https://4.imimg.com/data4/WW/WW/GLADMIN-/wp-content-plugins-blank-uploads-gnw7rayjt4gsgkgk8k-500x500.jpg" ,
        //     titletext: "Kodaikanal",
        //     maintitle:"Tourism  / January 22, 2022"
          
          
        //   },
        //   {
        //     id:"3",
        //     img: "https://www.nativeplanet.com/img/2020/01/cover-1579609724.jpg" ,
        //     titletext: "Jammu And Kashmir",
        //     maintitle: "Tourism   / January 22, 2022"
          
          
        //   },
        //  {
        //   id:"4",
        //     img:"https://media.istockphoto.com/photos/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrowgauge-railway-in-picture-id1223612773?k=20&m=1223612773&s=612x612&w=0&h=BXBnyuqTtsyi-Y9tQP1OUSJ1l3Ce1bqIHhQjHwvHOdE=",
        //     titletext: "Shimla",
        //     maintitle: "Tourism  / January 22, 2022 "
          
          
        //   },
        //  {
        //   id:"5",
        //     img: "https://d1e00ek4ebabms.cloudfront.net/production/47610c3b-e9df-4cac-8438-a0dddff7f7e2.jpg" ,
        //     titletext:"Goa",
        //     maintitle: "Tourism  / January 22, 2022"
          
          
        //   },
          
          
          // OBJECTS RELATED TO LATEST ARTICLES IN TOURISM PAGE
          
          {
            id: "6",
            title: "BENGALURU",
            img: "https://www.commercialofficebangalore.com/sites/default/files/Office_Location.jpg",
        
            info: "Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore Palace, modeled after England’s Windsor Castle, and Tipu Sultan’s Summer Palace, an 18th-century teak structure.",
            moreinfo: "Tourism / March 26, 2019"

        },
        {
            id: "7",
            title: "DELHI",
            img: "https://institute.careerguide.com/wp-content/uploads/2020/08/F6DC4613-C002-49C8-918BD271C794DC34.jpg",
            
            info: "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls.",
            moreinfo: "Tourism / March 26, 2019"

        },
        {
            id: "8",
            title: "JAMMU & KASHMIR",
            img: "https://www.worldatlas.com/upload/70/33/ab/shutterstock-115227475.jpg",
            
            info: " Jammu and Kashmir is a region administered by India as a union territory and consisting of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947, and between India and China since 1962.",
            moreinfo: "Tourism / March 26, 2019"

        },
        {
            id: "9",
            title: "GOA",
            img: "https://media.timeout.com/images/105240186/750/422/image.jpg",
           
            info: " Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
            moreinfo: "Tourism / March 26, 2019"

        },
        {
            id: "10",
            title: "JAIPUR",
            img: "https://lh3.googleusercontent.com/FqXvailyyIAehQ2Imh_8G1lU8hc-Yy-EQ8iZtNocgLaYD_cmVreNAttCWuxwu8Nm",
            
            info: "Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence.",
            moreinfo: "Tourism / March 26, 2019"

        },

        //  {
        //   id:"6",
        //     img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        //     title: "Kerala",
        //     info:"Kerala is famous especially for its ecotourism initiatives  and beautiful backwaters. Its unique culture and traditions, coupled with its varied demography, have made Kerala one of the most popular tourist destinations in the world",
        //     moreinfo: "Tourism  / January 22, 2022 "
          
        //   },
        //    {
        //     id:"7",
        //     img: "https://4.imimg.com/data4/WW/WW/GLADMIN-/wp-content-plugins-blank-uploads-gnw7rayjt4gsgkgk8k-500x500.jpg",
        //     title: "Kodaikanal",
        //     info: "Kodaikanal is known for its rich flora. Of the big trees, cypress, eucalyptus and acacia are the dominant  varieties. Pear trees are numerous and the fruits are of high quality.",
        //     moreinfo: "Tourism / January 22, 2022 "
          
        //   },
        //    {
        //     id:"8",
        //     img: "https://www.nativeplanet.com/img/2020/01/cover-1579609724.jpg" ,
        //     title:"Jammu And Kashmir",
        //     info: "Popularly known as the Paradise on Earth, Jammu  and Kashmir is world famous for its scenic splendour, snow-capped mountains, plentiful wildlife, exquisite monuments, hospitable people and local  handicrafts.",
        //     moreinfo: "Tourism / January 22, 2022 "
          
        //   },
        //    {
        //     id:"9",
        //     img: "https://media.istockphoto.com/photos/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrowgauge-railway-in-picture-id1223612773?k=20&m=1223612773&s=612x612&w=0&h=BXBnyuqTtsyi-Y9tQP1OUSJ1l3Ce1bqIHhQjHwvHOdE=" ,
        //     title: "Shimla",
        //     info: "The town is famous for pleasant walking experiences on hillsides surrounded by pine and oak forests. This capital city of Himachal Pradesh is famous for The Mall, ridge, and toy train. With colonial style buildings, the town has relics of ancient past that lend it a distinct look.",
        //     moreinfo: "Tourism / January 22, 2022 "
          
        //   },
        //  {
        //   id:"10",
        //     img: "https://d1e00ek4ebabms.cloudfront.net/production/47610c3b-e9df-4cac-8438-a0dddff7f7e2.jpg" ,
        //     title: "Goa",
        //     info: "Goa is famous for adventure water sports.",
        //     moreinfo: "Tourism / January 22, 2022 "
          
        //   }
        ]
        
    
         
      res.send(tourismdata);
   
  }
  
  
  module.exports.gettourismDetails = get
  
  
  
  