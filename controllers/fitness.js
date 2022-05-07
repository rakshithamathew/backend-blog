const get = (req, res) => {
const fitnessdata= 
    [
      {
        id: "1",
        titletext: "Yoga",
        img: "https://static.toiimg.com/photo/73174476.cms",
         
        maintitle: "Fitness / May 23, 2019"

    },
    {
        id: "2",
        titletext: "GYM",
        img: "https://static.sportzbusiness.com/uploads/2020/08/gym.jpg",
        
        maintitle: "Fitness / May 23, 2019"

    },
    {
        id: "3",
        titletext: "Healthy Diet",
        img: "https://www.spinecorrectioncenter.com/wp-content/uploads/2019/09/9-Benefits-of-Eating-a-Balanced-Diet_resized.png",
        
        maintitle: "Fitness / May 23, 2019"

    },
    {
        id: "4",
        titletext: "Alo Yoga",
        img: "https://www.rli.uk.com/wp-content/uploads/2021/05/AloYoga.jpg",
        
        maintitle: "Fitness / May 23, 2019"

    },
    {
        id: "5",
        titletext: "Aerobics",
        img: "https://i.ytimg.com/vi/965qZScyVVI/maxresdefault.jpg",
        
        maintitle: "Fitness / May 23, 2019"

    },

    //   {
    //     id:"1",
    //     img: "https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" ,
    //     titletext: "Aerobic",
    //     maintitle: "Fitness  / January 22, 2022"
      
      
    //   },
    //    {
    //     id:"2",
    //     img: "https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/830bb47e9d6dca4026ab8eba425e4945bb55/i1080x475.jpg" ,
    //     titletext: "Flexibility",
    //     maintitle: "Fitness / January 22, 2022 "
      
      
    //   },
    //  {
    //   id:"3",
    //     img: "https://www.mensjournal.com/wp-content/uploads/mf/1280-run-track-sprint-shuttle.jpg?w=900&h=506&crop=1&quality=86&strip=all" ,
    //     titletext: "Sprint",
    //     maintitle: "Fitness / January 22, 2022 "
      
      
    //   },
    //  {
    //   id:"4",
    //     img: "https://www.verywellfit.com/thmb/xVLTx6KUBTuPDGbkgqXhehUWP68=/2122x1415/filters:fill(FFDB5D,1)/GettyImages-485244797-566eae435f9b583dc376e6ec.jpg" ,
    //     titletext: "Muscular Strength",
    //     maintitle: "Fitness / January 22,  2022 "
      
      
    //   },
    //   {
    //     id:"5",
    //     img: "https://c0.wallpaperflare.com/preview/719/689/312/fitness-sports-gym-exercise.jpg",
    //     titletext: "Balance",
    //     maintitle: "Fitness / January 22, 2022 "
      
      
    //   },
      
      
      // OBJECTS RELATED TO LATEST ARTICLES IN FITNESS PAGE
      {
        id: "6",
        title: "Yoga",
        img: "https://static.toiimg.com/photo/73174476.cms",
         info: " Yoga (/ˈjoʊɡə/ (audio speaker iconlisten);[1] Sanskrit: योग, lit. 'yoke' or 'union' pronounced [joːɡɐ]) is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control (yoke) and still the mind, recognizing a detached witness-consciousness untouched by the mind (Chitta) and mundane suffering (Duḥkha). There is a wide variety of schools of yoga, practices, and goals[2] in Hinduism, Buddhism, and Jainism,and traditional and modern yoga is practiced worldwide.",
        moreinfo: "Fitness / May 23, 2022"

    },
    {
        id: "7",
        title: "GYM",
        img: "https://static.sportzbusiness.com/uploads/2020/08/gym.jpg",
        info: "The word is derived from the ancient Greek term They are commonly found in athletic and fitness centres, and as activity and learning spaces in educational institutions. is also slang for , which is often an area for indoor recreation. A may include or describe adjacent open air areas as well. In Western countries,often describe places with indoor or outdoor courts for basketball, hockey, tennis, boxing or wrestlin.",
        moreinfo: "Fitness / May 23, 2022"

    },
    {
        id: "8",
        title: "Healthy Diet",
        img: "https://www.spinecorrectioncenter.com/wp-content/uploads/2019/09/9-Benefits-of-Eating-a-Balanced-Diet_resized.png",
        info: "Diet (nutrition), the sum of the food consumed by an organism or group Dieting, the deliberate selection of food to control body weight or nutrient intake Diet food, foods that aid in creating a diet for weight loss or gain Healthy diet, the process of helping to maintain or improve overall health",
        moreinfo: "Fitness / May 23, 2022"

    },
    {
        id: "9",
        title: "Alo Yoga",
        img: "https://www.rli.uk.com/wp-content/uploads/2021/05/AloYoga.jpg",
        info: "ALO YOGA IS ALL ABOUT SPREADING MINDFUL MOVEMENT, INSPIRING WELLNESS, AND CREATING A COMMUNITY. FOUNDED IN LOS ANGELES, ALO YOGA'S MISSION TO CREATE THE BEST YOGA CLOTHING IN THE WORLD AND INSPIRE PEOPLE TO BRING YOGA INTO THEIR LIFE",
        moreinfo: "Fitness / May 23, 2022"

    },
    {
        id: "10",
        title: "Aerobics",
        img: "https://i.ytimg.com/vi/965qZScyVVI/maxresdefault.jpg",
        info: " Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness (flexibility, muscular strength, and cardio-vascular fitness). It is usually performed to music and may be practiced in a group setting led by an instructor (fitness professional), although it can be done solo and without musical accompaniment. With the goal of preventing illness and promoting physical fitness, practitioners perform various routines comprising a number of different dance.",
        moreinfo: "Fitness / May 23, 2022"

    },



    // {
    //   id:"6",
    //     img: "https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=",
    //     title: "Aerobic",
    //     info: "Aerobic exercise is any type of cardiovascular conditioning. It can include activities like brisk walking, swimming, running, or cycling. You probably know it as cardio.",
    //     moreinfo: "Fitness / January 22, 2022 "
      
    //   },
    //  {
    //   id:"7",
    //     img:"https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/830bb47e9d6dca4026ab8eba425e4945bb55/i1080x475.jpg" ,
    //     title: "Flexibility",
    //     info: "A flexibility exercise is a movement or position designed to stretch specific muscles, with the goal of increasing flexibility and range of motion in that specific area. ",
    //     moreinfo: "Fitness / January 22, 2022 "
      
    //   },
    //  {
    //   id:"8",
    //     img: "https://www.mensjournal.com/wp-content/uploads/mf/1280-run-track-sprint-shuttle.jpg?w=900&h=506&crop=1&quality=86&strip=all",
    //     title: "Sprint",
    //     info: "Sprint running races are short distances races in which athletes try to run at their maximum speed throughout the entire distance of the race.",
    //     moreinfo: "Fitness / January 22, 2022 "
      
    //   },
    //  {
    //   id:"9",
    //     img:"https://www.verywellfit.com/thmb/xVLTx6KUBTuPDGbkgqXhehUWP68=/2122x1415/filters:fill(FFDB5D,1)/GettyImages-485244797-566eae435f9b583dc376e6ec.jpg" ,
    //     title: "Muscular Strength",
    //     info: "Muscular strength is a type of fitness directly related to muscle density and endurance, allowing athletes to perform more repetitions while lifting heavier weights.",
    //     moreinfo: "Fitness / January 22, 2022 "
      
    //   },
    //   {
    //     id:"10",
    //     img: "https://c0.wallpaperflare.com/preview/719/689/312/fitness-sports-gym-exercise.jpg" ,
    //     title: "Balance",
    //     info:"Improving your balance makes you feel steadier.",
    //     moreinfo: "Fitness / January 22, 2022 "
      
    //   }
     
    ]
    res.send(fitnessdata);
}
    
    module.exports.getfitnessDetails = get