const get = (req, res) => {
  const homedata = [
    {
      id: "1",
      title: "Pizza",
      img: "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg",
      info: "The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, on the border with Campania.[4] Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries",

      subinfo: "Food  / January 22, 2022 ",
    },

    {
      id: "2",
      title: "Artificial Intelligence",
      img: "https://thumbs.dreamstime.com/z/futuristic-robot-artificial-intelligence-cgi-big-data-analytics-programming-robotic-man-d-render-Animetion-illustration-196113081.jpg",

      info: "Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans. Leading AI textbooks define the field as the study of : any system that perceives its environment and takes actions that maximize its chance of achieving its goals.[a] AI applications include advanced web search engines (e.g., Google), recommendation systems (used by YouTube, Amazon.",
      subinfo: "Technology  / March 25, 2022 ",
    },

    {
      id: "3",
      title: "Aerobics",
      img: "https://i.ytimg.com/vi/965qZScyVVI/maxresdefault.jpg",
      info: " Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness (flexibility, muscular strength, and cardio-vascular fitness). It is usually performed to music and may be practiced in a group setting led by an instructor (fitness professional), although it can be done solo and without musical accompaniment. With the goal of preventing illness and promoting physical fitness, practitioners perform various routines comprising a number of different dance.",
      subinfo: "Fitness  / January 10, 2022 ",
    },

    // OBJECTS RELATED TO TOP POST DETAILS IN HOME PAGE

    {
      id: "4",
      img: "https://institute.careerguide.com/wp-content/uploads/2020/08/F6DC4613-C002-49C8-918BD271C794DC34.jpg",
      titletext: "Bengaluru",
      maintitle: "Tourism  / January 22, 2022 ",
    },

    {
      id: "5",
      img: "https://static.sportzbusiness.com/uploads/2020/08/gym.jpg",
      titletext: "GYM",
      maintitle: "Fitness  / January 22, 2022 ",
    },

    {
      id: "6",
      img: "https://cdn.anime-planet.com/anime/primary/classroom-of-the-elite-1.jpg?t=1630331683",
      titletext: "Class Room of Elite",
      maintitle: "Anime  / January 22, 2022 ",
    },

    {
      id: "7",
      img: "https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214",
      titletext: "Data Science",
      maintitle: "Technology  / January 22, 2022 ",
    },
    {
      id: "8",
      img: "https://static.onecms.io/wp-content/uploads/sites/9/2021/10/15/air-fryer-brownies-FT-RECIPE1021-2.jpg",
      titletext: "Dessert",
      maintitle: "Food  / January 22, 2022",
    },

    // OBJECTS RELATED TO LATEST ARTICLES IN HOME PAGE

    {
      id: "9",
      title: "JAMMU & KASHMIR",
      img: "https://www.worldatlas.com/upload/70/33/ab/shutterstock-115227475.jpg",

      info: " Jammu and Kashmir is a region administered by India as a union territory and consisting of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947, and between India and China since 1962.",
      moreinfo: "Tourism  / January 22, 2022 ",
    },
    {
      id: "10",
      img: "https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=",
      title: "Aerobic",
      info: "Aerobic exercise is any type of cardiovascular conditioning. It can include activities like brisk walking, swimming, running, or cycling. You probably know it as cardio.",
      moreinfo: "Fitness / January 22, 2022 ",
    },
    {
      id: "11",
      img: "https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214",
      title: "Radhe Shyam Movie",
      info: "Radhe Shyam is an upcoming Indian period romantic drama film written and directed by Radha Krishna  Kumar, starring Prabhas and Pooja Hegde.",
      moreinfo: "Tollywood / January 22, 2022 ",
    },
    {
      id: "12",
      img: "https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg",
      title: "Cyber Security",
      info: "Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and  protect against the unauthorised exploitation of systems, networks and technologies.",
      moreinfo: "Technology / January 22, 2022 ",
    },

    {
      id: "13",
      img: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1",
      title: "Paneer Butter Masala",
      info: "Paneer butter masala, also known as butter paneer. ",
      moreinfo: "Food / January 22, 2022 ",
    },
  ];

  res.send(homedata);
};

module.exports.gethomeDetails = get;
