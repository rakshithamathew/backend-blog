const get = (req, res) => {
    const technologydata= 
  
    
        [
         {
           id:"1",
           img:"https://analyticsinsight.b-cdn.net/wp-content/uploads/2022/02/What-is-Motivating-Individuals-to-Pursue-a-Career-in-Data-Science.jpg" ,
           titletext: "Cyber Security",
           maintitle: "Technology / January 22, 2022 "
         
         
         },
         {
           id:"2",
           img: "https://thumbs.dreamstime.com/z/futuristic-robot-artificial-intelligence-cgi-big-data-analytics-programming-robotic-man-d-render-Animetion-illustration-196113081.jpg" ,
           titletext: "Artificial Intelligence",
           maintitle: "Technology / January 22, 2022 "
         
         
         },
        {
         id:"3",
           img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.analyticsinsight.net%2F5-trends-that-will-determine-the-future-of-big-data-technologies%2F&psig=AOvVaw3wa2_iRVTGgtiUTTfG3ks6&ust=1651985185201000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLjw2sTKzPcCFQAAAAAdAAAAABAD" ,
           titletext: "Big Data",
           maintitle: "Technology / January 22, 2022 "
         
         
         },
          {
           id:"4",
           img:"https://www.mobinius.com/wp-content/uploads/2021/06/Banner_Why-is-MERN-Stack-Considered-to-be-the-Best-for-Start-Ups_.jpg" ,
           titletext:"MERN",
           maintitle: "Technology / January 22, 2022 "
       
         
         
         },
         {
           id:"5",
           img: "https://imageio.forbes.com/specials-images/dam/imageserve/974512548/960x0.jpg?fit=bounds&format=jpg&width=960",
           titletext: "Digital Marketing",
           maintitle: "Technology / January 22, 2022 "
       
         
         
         },
         
         
         // OBJECTS RELATED TO LATEST ARTICLES IN TECHNOLOGY PAGE
         
         {
          id:"6",
          img:"https://analyticsinsight.b-cdn.net/wp-content/uploads/2022/02/What-is-Motivating-Individuals-to-Pursue-a-Career-in-Data-Science.jpg" ,
          title: "Cyber Security",
          info:"Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and  protect against the unauthorised exploitation of systems, networks and technologies.",
          moreinfo: "Technology / January 22, 2022 "
        
        
        },
        {
          id:"7",
          img: "https://thumbs.dreamstime.com/z/futuristic-robot-artificial-intelligence-cgi-big-data-analytics-programming-robotic-man-d-render-Animetion-illustration-196113081.jpg" ,
          title: "Artificial Intelligence",
          info:"Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and  protect against the unauthorised exploitation of systems, networks and technologies.",
          moreinfo: "Technology / January 22, 2022 "
        
        
        },
       {
        id:"8",
          img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.analyticsinsight.net%2F5-trends-that-will-determine-the-future-of-big-data-technologies%2F&psig=AOvVaw3wa2_iRVTGgtiUTTfG3ks6&ust=1651985185201000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLjw2sTKzPcCFQAAAAAdAAAAABAD" ,
          title: "Big Data",
          info:"Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and  protect against the unauthorised exploitation of systems, networks and technologies.",
          moreinfo: "Technology / January 22, 2022 "
        
        
        },
         {
          id:"9",
          img:"https://www.mobinius.com/wp-content/uploads/2021/06/Banner_Why-is-MERN-Stack-Considered-to-be-the-Best-for-Start-Ups_.jpg" ,
          title:"MERN",
          info:"Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and  protect against the unauthorised exploitation of systems, networks and technologies.",
          moreinfo: "Technology / January 22, 2022 "
      
        
        
        },
        {
          id:"10",
          img: "https://imageio.forbes.com/specials-images/dam/imageserve/974512548/960x0.jpg?fit=bounds&format=jpg&width=960",
          title: "Digital Marketing",
          info:"Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and  protect against the unauthorised exploitation of systems, networks and technologies.",
          moreinfo: "Technology / January 22, 2022 "
      
        
        
        },


        //  {
        //    id:"6",
        //    img: "https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg" ,
        //    title: "Cyber Security",
        //    info:"Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and  protect against the unauthorised exploitation of systems, networks and technologies.",
        //    moreinfo: "Technology / January 22, 2022 "
         
        //  },
        //   {
        //    id:"7",
        //    img: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg",
        //    title:"Artificial Intelligence",
        //    info: "Artificial intelligence (AI) is the ability of a computer or a robot controlled by a computer to do tasks that are usually done by humans because they require human intelligence and discernment.",
        //    moreinfo: "Technology/ January 22, 2022 "
         
        //  },
        //  {
        //    id:"8",
        //    img: "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg" ,
        //    title: "Block Chain Technology",
        //    info: "Blockchain technology is most simply defined as a decentralized, distributed ledger that records the provenance of a digital asset.",
        //    moreinfo: "Technology/ January 22, 2022 "
         
        //  },
        //  {
        //    id:"9",
        //    img: "https://i.ytimg.com/vi/cqgtdkURzTE/maxresdefault.jpg" ,
        //    title: "Cryptography",
        //    info: "Cryptography is the study of secure communications techniques that allow only the sender and intended recipient of a message to view its contents.",
        //    moreinfo: "Technology / January 22, 2022"
         
        //  },
        //  {
        //    id:"10",
        //    img:"https://imageio.forbes.com/specials-images/imageserve/5f965d43ac32303829f68758/The-5-Biggest-Internet-Of-Things--IoT--Trends-In-2021-Everyone-Must-Get-Ready-For-Now/960x0.jpg?fit=bounds&format=jpg&width=960" ,
        //    title: "Internet Of Things",
        //    info: "The internet of things, or IoT. ",
        //    moreinfo: "Technology/ January 22, 2022 "
         
        //  }
       ]
       
        
        res.send(technologydata);
    }
        
        module.exports.gettechnologyDetails = get