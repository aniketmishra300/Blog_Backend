const express = require('express')

  const data = (req,res)=>{
    
    
    res.send(
    [
    ////Bollywood///////////
    {
      
      image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/571/900571-h",
      category: "Bollywood1"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmPTXuEncLiDkpYHZXroAvMiZbM3QWm_VSw&usqp=CAU",
      category: "Small1"
    },
    {
      image: "https://himachal.blog/wp-content/uploads/2023/08/yoga-164923092416x9-1.jpeg",
      category: "Small1"
    },
    {
      id: 1,
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/et00347237-gqcxnvlnyy-landscape.jpg",
      name: "Tu Jhoothi Main Makkaar: Ranbir Kapoor Starrer Movie Songs Dominates Top 50 Spotify India List",
      description: "T-Series and Luv Films’ blockbuster film, Tu Jhoothi Main Makkaar, continues its remarkable journey of success, captivating audiences in India and around the globe. Adding to the film’s phenomenal reception, the soundtrack of the film became an instant sensation resonating with music lovers since the release of its first song, “Tere Pyaar Mein”, the second soundtrack, “Pyaar Hota Kayi Baar Hai,” garnered tremendous attention too given its relatable lyrics and is still trending extensively on social media with netzines making creative reels.",
      category: "The_latest",
      date: "09/09/2023"
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEVKJHAMxCSiZFxr18xSQ9_qoajL-2vghKw&usqp=CAU",
      name: "Akshay Kumar drops the motion poster of Mission Raniganj, replaces India with Bharat",
      description: "The upcoming movie starring Akshay Kumar has an intriguing /Bhara/ connection. On Wednesday, the actor released the motion poster for Mission Raniganj, but the internet quickly discovered a few changed references to /Bharat/ in his Instagram post.",
      category: "Bollywood",
      date: "09/09/2023"
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSywBJ0WsQ7HvPb_82G5cRRn6dhA4EJxYNTSA&usqp=CAU",
      name: "Birthday Special: 10 Asha Bhosle Songs to feel the magic of love",
      description: "Asha Bhosle, is a name that needs no introduction. She is a name that is backed by a legacy of musical talent. With her talent and voice, Ashaji has come to be associated with classic popular songs from the past. Her music has endured the test of time as she has brilliantly mastered every genre, from pop numbers to ghazals. She has been promoting a level of linguistic and musical diversity with her music that was unequalled since the 1940s..",
      category: "Bollywood",
      date: "08/09/2023"
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Tp7H46mZE4M8UxxTLV-rYlVlxY8Sd2FLCQ&usqp=CAU",
      name: "Sunny Deol overwhelmed by the audience response to Gadar 2: I'm Not Sure Whether I Deserve It or No",
      description: "Recently, during a broadcast news show, Sunny Deol was seen shedding tears of gratitude at the sight of the standing ovation from his fans. Upon being asked by the host about the tears in his eyes, Sunny once again became emotional with positive feelings, and the audience continued to show their support by applauding him.",
      category: "Bollywood",
      date: "10/10/2023"
    },
    {
      id:5,
      category:"Bollywood",
      description:"Further, when asked how ‘Tamasha’ has left a mark on him both as an actor and audience, he replied, “As an actor, it inspires me to keep my inner child alive, never be mediocre, and to keep exploring myself. It also depicts separation, love, and unification beautifully. In an era of instant dating, ‘Tamasha’ really inspires you to wait for your true love and accept it the way it is.”As an audience it makes me think about a possible life that can be more beautiful and therefore ‘have that conversation with your boss,” he added.",
      name:"Tamasha",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFDjHlDGdLaxG63G_FpnwR65Cb2imiKZnVQ&usqp=CAU"
      ,date: "10/10/2023"
    }  ,
  {
      id:6,
      category:"Bollywood",
      description: "Actress Kriti Sanon, who is currently on cloud nine after winning the coveted National Award in the Best Actress category for her film Mimi, revealed in a recent interview about her career trajectory, having a plan B and also being humiliated by a choreographer in her early days in the industry. Talking to Curly Tales, the National Film awardee recalled an unpleasant experience at her first fashion show. The actor shared,My first ramp show, the choreographer, I have never worked with her again, she was very rude to me because I messed up the choreography. ",
      name:"Kriti Sanon Recalls Crying After A Choreographer Scolded Her In Front Of 50 Models",
      image:"https://c.ndtvimg.com/2023-09/67b9onsg_priyanka-_625x300_04_September_23.jpg",
      date: "10/10/2023"
  }  ,
  {
      id:7,
      category:"Bollywood2",
      description:"Shah Rukh tweeted, “Congratulations to Hon. PM @narendramodi ji for the success of India’s G20 Presidency and for fostering unity between nations for a better future for the people of the world. It has brought in a sense of honour and pride into the hearts of every Indian. Sir, under your leadership, we will prosper not in isolation but in Oneness. One Earth, One Family, One Future.”PM Modi formally closed the summit by passing on a ceremonial gavel to Brazilian President Luiz Inacio Lula da Silva. Brazil will take the bloc's presidency on December 1. ",
      name:"Shah Rukh Khan congratulates PM Narendra Modi for G20 Summit: 'Under your leadership we will prosper…' ",
      image:"https://www.hindustantimes.com/ht-img/img/2023/09/10/550x309/shah_rukh_khan_1694349393087_1694349393377.jpg",
      date: "10/10/2023"
      },

    {
      id: 8,
      image: "https://filmfare.wwmindia.com/content/2023/sep/madhuridixitshahrukhkhanjawan41694170337.jpg",
      name: "Madhuri Dixit says she 'cannot wait’ to watch Shah Rukh Khan's Jawan",
      description: "Madhuri Dixit shared on her Instagram stories that she 'cannot wait' to watch the movie. Madhuri took to Instagram stories and shared the trailer of Jawan. She wrote, Getting ready to be mesmerised by your amazing performance yet again @iamsrk Can't wait to watch it in the theatre",
      category: "Bollywood",
      date: "10/08/2023"
    },
    {
      id:9,
      category:"Bollywood",
      description:"Janhvi Kapoor is a total stunner who is redefining fashion trends with her stunning looks. And if you don't believe us, then head over to her Insta-diaries, which are filled with the stylish looks of the actress, providing a treasure trove of fashion inspiration to all her fans.  ",
      name:"Janhvi Kapoor adorns linen saree with unique drape, transforming into a living canvas of grace and beauty.",
      image:"https://www.hindustantimes.com/ht-img/img/2023/09/01/550x309/photo_2023-09-01_00-01-01_1693535145565_1693535149651.jpg",
      date: "10/10/2023"
    }, 
    {
      id:10,
      category:"Bollywood",
      description:"Nora Fatehi posted pictures of herself in an elegant green silk saree and a purple plunge blouse. You should steal her traditional look for your wardrobe.Nora Fatehi is known for her experimental streak with her sartorial choices. The star never shies away from going bold and sultry while picking looks for her glamorous wardrobe. However, the star's traditional picks always win hr fans' hearts. The dancer and actor's latest photoshoots are proof. ",
      name:"Nora Fatehi's elegant green silk saree, purple plunge blouse is a traditional look you should steal for your wardrobe",
      image:"https://www.hindustantimes.com/ht-img/img/2023/09/10/550x309/Nora_Fatehi_1694327681666_1694327688313.jpg",
      date: "14/10/2023"
    }, 
    {
      id:11,
      category:"Bollywood",
      description:"After enchanting audiences and ruling over the box office, the Ranbir Kapoor and Alia Bhatt starrer 'Brahmastra is finally set for its OTT release.As per the latest reports, the Ayan Mukerji directorial has booked a November 4th release on a popular OTT platform. The fantasy film will debut on Disney+ Hotstar at 12 AM.The exciting update comes after the makers dropped ticket prices to around Rs 100 to ensure many more moviegoers got achance to watch the stunning VFX on the big screen.",
      name:"Ranbir Kapoor and Alia Bhatt's 'Brahmastra' set for November4",
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKlFqJXPDNUqYq54dPgD-P5JSUd_RIIQw5Q&usqp=CAU",
       date: "10/12/2023"
    }, 
    {
      id:12,
      category:"Bollywood",
      description:"I really wanted to love The Family Man. Raj and DK are always at the cusp of the next big thing, except in the case of Stree, the sleeper hit of 2018 that they wrote, which is a bonafide success. There's Go Goa Gone, which introduced Indians to a new kind of comedy, and is their best work according to me. There Shor in the City, the quintessential underdog film — I can't find one person who hated it. There's A Gentleman",
      name:"The Family Man review: An uneven, lengthy series held together by Manoj Bajpayee and earnest intent",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAnilNIU013-BcTJbbnFsZp_5JIjva9gu8ag&usqp=CAU",
      date: "22/10/2023"
    },
    {
    id:13,
    category:"Bollywood",
    description:"Varun Dhawan and Janhvi Kapoor's Bawaal was dubbed 'insensitive' and 'tone-deaf' for its references to Adolf Hitler and the Holocaust, the genocide of European Jews during the World War II. Now, when Varun was awarded Best Actor for the Nitesh Tiwari film at an event on Friday, netizens had a field day cracking jokes about the same.When a photo of Varun receiving the award was shared on the Reddit subgroup BollyBlindsNGossip, a netizen wrote, He has the audacity to go and accept it. I am never gonna watch a movie of his again after he doubled down defending this crap of a movie!!",
    name:"'Bawaal' is worth watching for World War II history, especially the recreation of the holocaust, and Varun as well as Janhvi’s stellar performances.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8VPYaQadhUf5giUxDZeGho_ho6Xpt4hlcfA&usqp=CAU",
    date: "10/09/2023"
    },
    {
    id:14,
    category:"Bollywood",
    description:"Chandramukhi 2, directed by P Vasu and starring Raghava Lawrence and Kangana Ranaut in lead roles,is scheduled to hit theaters soon. However, as per latest reports, the horror-comedy will now be released at the end of this month. Industry tracker LetsCinema's tweet on Friday read However, the film's cast or makers are yet to react to the buzz around Chandramukhi 2 not releasing as per its initially planned date of September 19. Some on social media also suggested that the movie might not come about on its original release date due to the strong opening of Shah Rukh Khan's Jawan on September 7.",
    name:"Kangana Ranaut's Chandramukhi 2 faces delay, release postponed to September 28: Report",
    image:"https://www.hindustantimes.com/ht-img/img/2023/06/30/1600x900/CHANDRAMUKHI_2_1688088178016_1688088178380.jpg",
    date: "10/10/2023"
    }  ,

    ////South_News////////////////////
    {
      id: 215,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOyg9tZv87GfRi4Lfkkxy1ZnYwUV0Y9USRZg&usqp=CAU",
      name: "Skanda: The Attacker (2023)",
      description: "Is Skanda hit or flop? The music is composed by Thaman S, while the cinematography and editing are handled by Santosh Detake and Tammiraju, respectively. Skanda was released on September 28, 2023 to mixed-to-negative reviews from critics. The film grossed ₹59.20 crore against the budget of ₹50 crore and became a box-office bomb..",
      category: "South_News",
      date: "12/08/2023",
      number : 1

    },
    {
      id: 15,
      image: "https://st1.bollywoodlife.com/wp-content/uploads/2023/09/srkkka-11.png?impolicy=Medium_Widthonly&w=303",
      name: "Prabhas to play Lord Shiva in Kannappa; Kriti Sanon’s sister Nupur Sanon bags the leading role",
      description: "Prabhas is unstoppable, and he is on a signing spree. The latest update about the pan-India star is that he has signed his next film with Manchu Vishnu and has Nupur Sanon as his leading lady in Kannappa. Prabhas is all set to begin shooting for Kannappa, and after romancing Kriti Sanon in Adipurush, the Saalar star will be sharing the screen with the National Award winner's sister, Nupur Sanon. Prabhas fans are extremely elated with his latest news and have been trending his name on Twitter and are hailing him as the king. Manchu Vishnu's dream project Kannappa has only gotten bigger with Prabhas' entry as Lord Shiva, and the star will reportedly have 15–30 minutes of screen time in the film..",
      category: "South_News",
      date: "12/08/2023",
      number : 2
    }, 
    {
      id: 16,
      image: "https://st1.bollywoodlife.com/wp-content/uploads/2023/09/Pushpa-2-release-date.png?impolicy=Medium_Widthonly&w=1280&h=900",
      name: "Pushpa 2 release date: Allu Arjun, Rashmika Mandanna starrer locks Independence Day 2024, check new poster",
      description: "Allu Arjun, Rashmika Mandanna are both gearing up for Pushpa 2 now. It is one of the most anticipated new movies of 2024. The film is high on buzz with fans demanding an update about Pushpa 2 every day possible. And finally, the day has arrived. You read that right, the makers of Allu Arjun starrer have treated the National award-winning actor's fans to a big update. They have announced the release date of Pushpa 2. Fans have been eagerly awaiting Pushpa 2 release date and it is finally here. Allu Arjun's Pushpa will meet you on Independence Day next year...",
      category: "South_News",
      date: "12/08/2023",
      number : 3
    }, 
    {
      id: 17,
      image: "https://st1.bollywoodlife.com/wp-content/uploads/2023/09/FotoJet-2023-09-10T002239.674.jpg?impolicy=Medium_Widthonly&w=303",
      name: "Salaar: Prabhas, Prashanth Neel film postponement's REAL reason revealed?",
      description: "Salaar is the movie people were looking forward to in September 2023 after Jawan. Prabhas is one pan-India star who is loved all over the country. But the makers said that Salaar has been postponed. The reason being given was that production work is not over on the film. Salaar made by Prashanth Neel is bankrolled by Hombale Films. The movie is rumoured to be a part of the KGF Universe as per some social media handles. Many felt that Jawan was the reason the makers decided to push the film ahead. Shah Rukh Khan's film has got a hysterical response from the masses and classes. If the collections happen at this rate, it will soon cross Pathaan..",
      category: "South_News",
      date: "12/08/2023",
      number : 4
    }, 
    {
      id: 18,
      image: "https://st1.bollywoodlife.com/wp-content/uploads/2023/09/FotoJet-2023-09-08T002117.189.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
      name: "Leo: Thalapathy Vijay starrer gets fabulous response from UK box office 40 days ahead of release",
      description: "Leo starring Thalapathy Vijay, Trisha and Sanjay Dutt is coming on October 19. The movie is almost the films of 2023 that has immense buzz on social media. In fact, Jawan, Salaar and Leo are three movies that are discussed the most on social media. Tamil superstar Thalapathy Vijay has a huge fan following overseas. We know that film chains open bookings in advance for top South stars, and it has done the same for Thalapathy Vijay's Leo in the UK. The advance bookings are happening, and the demand 40 days prior to release is mind-boggling...",
      category: "South_News",
      date: "12/08/2023",
      number : 5
    },


    //////////tECHNOLOGY /////////////////

    {
      id: 19,
      image: "https://sm.mashable.com/t/mashable_in/photo/default/4_fddg.1248.jpg",
      name: "ChatGPT Website Traffic Declines For Third Consecutive As New Users Dip By 3.2% In August",
      description: "Monthly visits to OpenAI's ChatGPT website have seen a third consecutive decline in August, although the downward trend appears to be slowing down, reports Similarweb. Global website visits via desktop and mobile dipped by 3.2% to 1.43 billion in August, following roughly 10% declines in the preceding two months. The average time spent by visitors on the site has also been decreasing since March, from an 8.7-minute average to 7 minutes in August.",
      category: "The_latest",
      date: "12/08/2023"
    },
     {
    id: 20,
    image: "https://sm.mashable.com/t/mashable_in/review/a/amazons-ec/amazons-echo-show-10-is-one-of-our-favorite-smart-home-devic_r9rh.1248.jpg",
    name: "Amazon's Echo Show 10 Is One Of Our Favorite Smart Home Devices",
    description: "I’ve always been a little bit of a skeptic when it comes to Amazon Echo devices. Most of my family were early adopters — even my parents have multiple Echos throughout their home — but, while I love the concept of a fully integrated smart home, I wasn’t really sure if adding an Alexa device would really “level up” my experience. While I use (and love) things like WiFi-enabled lights and a smart thermostat, I was satisfied with using my iPhone to help me control all of these devices. When I got the opportunity to try out the 3rd generation of the Amazon Echo Show 10, however, I was able to see for myself if it was just a glorified speaker or something more robust..",
    category: "Technology",
    date: "12/08/2023"
  },
  {
    id: 21,
    image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24037406/226274_APPLE_WATCH_ULTRA_PHO_akrales_0015.jpg",
    name: "Who is the Apple Watch Ultra really for?",
    description: " While I’ve loved using the Ultra this past year, I don’t think this is as much a smartwatch for adventurers as it is for... Actually, I’m still trying to figure that out..",
    category: "SmallTechnology",
    date: "11/08/2023"
  },
  {
    id: 22,
    image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1128x701:1129x702):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/16294979/akrales_190522_3440_0029.jpg",
    name: "Apple’s Lightning connector was the first great port — and USB-C might be the last",
    description: "/ It’s all but certain that the next iPhone will have a USB-C port. But the future of charging may be no port at all..",
    category: "SmallTechnology",
    date: "11/08/2023"
  },
  {
    id: 23,
    image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/19915588/akrales_200421_3975_0080.jpg",
    name: "What’s the best student laptop? We asked students",
    description: "Shopping for a laptop can be stressful — doubly stressful if you or your children will be learning online for the first time. Kids of different ages have a range of different laptop use cases and different needs. And as the choices for best laptop and best Chromebook evolve, so do students’ needs. So I spoke to some experts on the subject: students themselves. .",
    category: "Technology",
    date: "11/08/2023"
  },
  {
    id: 24,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4IL5Nt8e8u2HQQu2JbPof5S_5Me91OEhWA&usqp=CAU",
    name: "WhatsApp is working on cross-platform messaging",
    description: "/ A new WhatsApp beta contains a clue about how Meta is preparing to comply with the EU’s Digital Markets Act that will require chat interoperability with other services..",
    category: "Technology",
    date: "11/08/2023"
  },      
  
  {
    id: 25,
    image: "https://venturebeat.com/wp-content/uploads/2023/09/AdobeStock_268974526.jpeg?fit=750%2C414&strip=all",
    name: "Generative AI in production: Rethinking development and embracing best practices",
    description: "Generative AI is reshaping how businesses engage customers, elevate CX at scale and drive business growth. In this this VB Spotlight, industry experts shared real-world use cases, discussed challenges and offered actionable insights to empower your organization’s gen AI strategy..",
    category: "Technology",
    date: "12/08/2023"
  }, 
  {
    id: 26,
    image: "https://sm.mashable.com/t/mashable_in/photo/default/7_avp8.1248.jpg",
    name: "Huawei's Highly Anticipated Watch GT 4 Set To Wow With Dual Sizing And Extended Battery Life",
    description: "The eagerly awaited Huawei Watch GT 4 is ready to launch at Huawei's 'Wearable Strategy and New Product Launch' event on September 14 in Barcelona. While the full design and details are yet to be officially disclosed, a recent report has revealed the key specifications. One standout feature is its substantial battery capacity, potentially lasting up to two weeks on a single charge.",
    category: "Technology",
    date: "12/08/2023"
  },

  {
    id: 27,
    image: "https://cdn.vox-cdn.com/thumbor/fo43LqLpuuBmr56WLUFn6jedfm0=/0x0:5913x3588/920x613/filters:focal(2484x1321:3430x2267):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71822251/GettyImages_1245566064.0.jpg",
    name: "Think AI was impressive last year? Wait until you see what’s coming.",
    description: "Kelsey Piper is a senior writer at Future Perfect, Vox’s effective altruism-inspired section on the world’s biggest challenges. She explores wide-ranging topics like climate change, artificial intelligence, vaccine development, and factory farms, and also writes the Future Perfect newsletter.",
    category: "Technology",
    date: "12/08/2023"
  },
  {
    id: 28,
    image: "https://cdn.vox-cdn.com/thumbor/O1s5DGhfOuT28y7EywnagKhaRys=/0x0:5000x3332/920x613/filters:focal(2100x1266:2900x2066):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71389103/1243263843.0.jpg",
    name: "Two Republican judges just let Texas seize control of Twitter and Facebook",
    description: "An especially right-wing panel of the already conservative United States Court of Appeals for the Fifth Circuit handed down an astonishing opinion on Friday, effectively holding that the state of Texas may seize control of content moderation at major social media platforms such as Twitter, Facebook, and YouTube.",
    category: "Technology",
    date: "12/08/2023"
  },
  {
    id: 29,
    image: "https://cdn.vox-cdn.com/thumbor/lIPBHTXMId428u2uX8W5kFilPno=/0x0:5000x3333/920x613/filters:focal(2100x1267:2900x2067):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67004417/1223463312.jpg.0.jpg",
    name: "How technology literally changes our brains",
    description: "In 1964, the Canadian philosopher Marshall McLuhan published his opus Understanding Media: The Extensions of Man. In it he writes, “In the long run, a medium’s content matters less than the medium itself in influencing how we think and act.” Or, put more simply: “Media work their magic, or their mischief, on the nervous system itself.”",
    category: "Technology",
    date: "12/08/2023"
  },
  {
    id: 30,
    image: "https://cdn.vox-cdn.com/thumbor/-Avk5HXskUHxG7nXCC47y8aOEiQ=/0x0:5500x3667/920x613/filters:focal(2050x1464:2930x2344):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64785002/GettyImages_917581126.0.jpg",
    name: "Microsoft wants to build artificial general intelligence: an AI better than humans at everything",
    description: "Kelsey Piper is a senior writer at Future Perfect, Vox’s effective altruism-inspired section on the world’s biggest challenges. She explores wide-ranging topics like climate change, artificial intelligence, vaccine development, and factory farms, and also writes the Future Perfect newsletter.",
    category: "Technology",
    date: "12/08/2023"
  },
  {
    id: 31,
    image: "https://sm.mashable.com/t/mashable_in/review/a/apples-m2-/apples-m2-macbook-air-is-a-super-fast-wfh-companion-with-a-d_j98k.1248.jpg",
    name: "Apple's M2 MacBook Air Is A Super-Fast WFH Companion With A Dreamy Keyboard",
    description: "That’s because the new 2022 MacBook Air, powered by Apple’s in-house M2 silicon, is just about the ideal work-from-home (or work-from-wherever, really) companion. For a starting price of $1,200, this new M2 Air delivers everything you need any job centered around using a computer: Rock-solid battery life, a larger 13.6-inch display than previous models, a keyboard that’s to die for, and enough horsepower to handle everyday tasks with ease.",
    category: "Technology",
    date: "12/08/2023"
  },


  //////////////////////////////////// Hollywood //////////////////////////////////////////////////////

  {
    id: 32,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwctqI8pj28c-zmjDXNLrPI3EYZHF9Wd4ApQ&usqp=CAU",
    name: "THE MARVELS OFFICIAL TRAILER",
    description: "Carol Danvers aka Captain Marvel has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan, Kamala Khan aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team-up and learn to work in concert to save the universe as “The Marvels.”.",
    category: "Hollywood",
    date: "12/08/2023"
  },
  {
    id: 33,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrt6uo_s0eRzYuXW0hirr870V6ApaKLFgUg&usqp=CAU",
    name: "MISSION IMPOSSIBLE: DEAD RECKONING – PART ONE (2023) REVIEW",
    description: "A “DEAD RECKONING” RINGER FOR GREAT SUMMER BLOCKBUSTER ACTION   The Mission Impossible franchise has had a lengthy road, stretching from the small screen (all the way back from 1966 to 1973) to the big screen in 1996, with the release of the first film (i.e. Mission Impossible) and introducing the spy riddled world of character Ethan Hunt (played by actor Tom Cruise) to",
    category: "Hollywood",
    date: "12/08/2023"
  },
  {
    id: 34,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsYpoKO_BT33OedsqUkKbwP1bu7Df78Q4ZFQ&usqp=CAU",
    name: "BLUE BEETLE OFFICIAL TRAILER 2",
    description: "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab. When the Scarab suddenly chooses Jaime to be its symbiotic host, he is bestowed with an incredible suit of armor capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the Super Hero BLUE BEETLE.",
    category: "Hollywood",
    date: "12/08/2023"
  },
  {
    id: 35,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvcoPz2YSOPRolzG8YEDCpNDThve4Zy8XsSaTL8LgE3XLBGOZaAlRG6-jOuxwAf8urrY&usqp=CAU",
    name: "NAPOLEON OFFICIAL TRAILER",
    description: "Witness the rise of an emperor as Sony Pictures (an Apple TV) releases the official trailer for the upcoming epic drama period piece of Napoleon. View trailer below. The film is an original and personal look at Napoleon Bonaparte’s origins and his swift, ruthless climb to emperor, viewed through the prism of his addictive and often volatile relationship with his wife and one true love, Josephine.",
    category: "Hollywood",
    date: "12/08/2023"
  },
  {
    id: 36,
    image: "https://www.thewrap.com/wp-content/uploads/2023/09/drew-barrymore-2.jpg",
    name: "‘Drew Barrymore Show’ Says Host ‘Was Completely Unaware’ of Fans’ Removal for WGA Pins, Expresses ‘Regret’",
    description: "Drew Barrymore was “completely unaware” that two fans were removed from a taping of her show for wearing WGA pins, TheWrap has learned. The removal of audience members Dominic Turiczek and Cassidy Carter was blamed on “heightened security concerns.”",
    category: "Hollywood",
    date: "12/08/2023"
  },
  {
    id: 37,
    image: "https://thefilm742.files.wordpress.com/2023/09/img_0684.webp?w=768&h=425&crop=1",
    name: "MY BIG FAT GREEK WEDDING 3 | REVIEW",
    description: "A critique often levelled at Nia Vardalos’ Big Fat Greek Wedding films is that each, thus far, has played largely as might a protracted sitcom episode. There’s irony there. After all, the actual sitcom spun from 2002’s original sleeper hit proved a stonking miss. Fans slept on that one. Kirk Jones’ ‘long awaited’ 2016 sequel proved more successful and now here comes a third.",
    category: "Hollywood",
    date: "12/08/2023"
  },
  {
    id: 38,
    image: "https://thefilm742.files.wordpress.com/2023/08/img_0534.jpg?w=768&h=425&crop=1",
    name: "STRAYS | REVIEW",
    description: "It’s the vulgarity of Seth MacFarlane’s bromantic comedy Ted that comes to mind when watching Strays. That, rather than more obvious overlaps with the more wholesome likes of Homeward Bound and The Incredible Journey. Both by Disney. Certainly, a wilfully – gleefully, even – unnecessary blitzkrieg of F-bombs within the opening ten minutes puts pay to any notion that the film might offer up family friendly canine fun. The wilderness of penis, poo and pee-ff gags that follow merely do to hammer home the point. Strays puts the ‘R’ in grrrr. Disney it is not.",
    category: "Hollywood",
    date: "12/08/2023"
  },
  {
    id: 39,
    image: "https://thefilm742.files.wordpress.com/2023/08/img_0049.jpg?w=768&h=425&crop=1",
    name: "MEG 2: THE TRENCH | REVIEW",
    description: "When is dumb fun just dumb? When is homage just stealing? Meg 2: The Trench – and the definition of a un-called for sequel – answers on both counts with with two soggy thumbs in its own wet face. As directed by the once interesting Ben Wheatley, the film plods along with listless energy, tugging along a desperately shipwrecked cast with all the enthusiasm of an industrial trawler. To its minor credit, things pick up in a last ditch dash of bonkers. This is a film of thirds. The first third is poor",
    category: "Hollywood",
    date: "12/08/2023"
  },
  {
    id: 40,
    image: "https://thefilm742.files.wordpress.com/2023/07/img_9976.jpg?w=768&h=425&crop=1",
    name: "MAVKA: THE FOREST SONG | REVIEW",
    description: "There’s much to like about Mavka: The Forest Song. This being the Oleh Malamuz and Oleksandra Ruban directed Ukrainian animation that is currently enjoying a limited but UK wide cinema release. Based on a 1918 play by poet Lesya Ukrainka, the film unites folkish mythos with a more pointed contemporary resonance. If that element wisps over the heads of Mavka’s target audience, a call for unity and message of hope should at least land rather nicely..",
    category: "Hollywood",
    date: "12/08/2023"
  },
  {
    id: 41,
    image: "https://thefilm742.files.wordpress.com/2023/07/img_9968.jpeg?w=768&h=425&crop=1",
    name: "TALK TO ME | REVIEW",
    description: "Having cut their teeth on YouTube, with a string of wildly popular comic horror skits, twin brothers Danny and Michael Philippou transition now to cinema like undead ducks to the waters of the River Styx. While zane and chutzpah have long set apart the pair’s antics, who could have guess that the makers of “VIOLENT Zombie Fatalities (!)” would prove so adept when it came to the weaving of complex and surprising narrative webs?",
    category: "Hollywood",
    date: "12/08/2023"
  },
  {
    id: 42,
    image: "https://thefilm742.files.wordpress.com/2023/07/img_9927.webp?w=768&h=425&crop=1",
    name: "OPPENHEIMER | REVIEW",
    description: "The moral complexity of Oppenheimer is matched only by its extraordinary technical achievements. Both are peerless. This is one more towering achievement for Christopher Nolan in a filmography overflowing with creative impetus. Moreover, Oppenheimer is a remarkable, multi-sensory reimagining all that a biopic can be. There’s precious little of convention here. Linear history is torn asunder in the name of art, with a patchwork narrative instead eliciting both insight and thematic urgency from a story that is broadly well known in the public consciousness. To say the film is nuclear would do only to scratch the surface.",
    category: "Hollywood",
    date: "12/08/2023"
  },
  {
    id: 43,
    image: "https://thefilm742.files.wordpress.com/2023/07/img_9906.webp?w=768&h=425&crop=1",
    name: "MISSION: IMPOSSIBLE – DEAD RECKONING PART ONE | REVIEW",
    description: "For a film four years in the making, Dead Reckoning doesn’t half land with peculiar resonance. This is the seventh in the Mission: Impossible film saga and first of a two-part extravaganza. It’s a blockbuster concerned with the perils of artificial intelligence, released in sync with the launch of Hollywood’s biggest strike in sixty years. A strike pitted against exactly that threat. ",
    category: "Hollywood",
    date: "12/08/2023"
  },
  {
    id: 44,
    image: "https://thefilm742.files.wordpress.com/2023/06/img_9801.jpg?w=768&h=425&crop=1",
    name: "INDIANA JONES AND THE DIAL OF DESTINY | REVIEW",
    description: "Remember that aura of dissatisfaction that haunted the multiplex as the credits rolled on 2008’s Indiana Jones and the Kingdom of the Crystal Skull? It was in the mutterings of malignancy that decried Shia LaBeouf’s irritating Mutt and ridiculed the risible extraterrestrial final act. You weren’t alone. Dial of Destiny, the fifth and final in the franchise, arrives lobbied by Harrison Ford himself and the screen icon’s personal penchant for an emotional encore.",
    category: "Hollywood",
    date: "12/08/2023"
  },
  //small Top Hollywood data...................
{
  id: 45,
  image: "https://thefilm742.files.wordpress.com/2023/06/img_9566.webp?w=768&h=425&crop=1",
  name: "SPIDER-MAN: ACROSS THE SPIDER-VERSE | REVIEW",
  description: "According to common parlance, even in the face of continually enviable box office takings, Hollywood’s superhero boom is super over. The fatigue is real. DC lack coherency, Marvel have lost their creative spirit. While the reality of such a judgement remains up for debate in the sphere of live action super cinema, the argument holds no sway at Sony. Herein lies the revolution. A sequel to 2018’s wildly successful, entirely groundbreaking, Spider-Man: Into the Spider-Verse, 2023’s Across the Spider-Verse serves up the apex of blockbusting coherency and creative vigour.",
  category: "Top Holly",
  date: "12/08/2023",
  number : 1
},
  
  {
    id: 46,
    image: "https://thefilm742.files.wordpress.com/2023/06/img_9565.jpg?w=768&h=425&crop=1",
    name: "THE LITTLE MERMAID | REVIEW",
    description: " Disney hasn’t half come a long way since Angela Lansbury and David Tomlinson shimmied a sub-marina two step back in 1971’s Bedknobs and Broomsticks. Gone are the two-dimensional toons and hand-drawn backdrops. This is the post-Avatar world of CGI wizardry. Rob Marshall’s new take on Hans Christian Anderson’s The Little Mermaid, by way of Disney’s beloved 1989 animation, follows hot on the heels of James Cameron’s Way of the Water in this respect and achieves a feat that must once have seemed impossible. Which is to say: to film a technically brilliant underwater musical...",
    category: "Top Holly",
    date: "13/08/2023",
    number : 2
  },
  {
    id: 47,
    image: "https://thefilm742.files.wordpress.com/2023/05/img_9320.jpg?w=768&h=425&crop=1",
    name: "LOVE AGAIN | REVIEW",
    description: " Priyanka Chopra and Sam Heughan have chemistry. It’s bubbly, believable and worth rooting for. That’s half of the battle in any rom com and a casting coup for James C. Strouse’s Love Again – which, ironically, features Chopra’s real life husband, Nick Jonas, as the world’s worst date. You can’t make this stuff up. Chopra plays Mira Ray, a children’s book illustrator beset by grief, following the tragic death of her near-fiancé John (Arinzé Kene) two years prior...",
    category: "Top Holly",
    date: "13/08/2023",
    number : 3
  },
  {
    id: 48,
    image: "https://thefilm742.files.wordpress.com/2023/05/img_9289.jpg?w=768&h=425&crop=1",
    name: "GUARDIANS OF THE GALAXY: VOL. 3 | REVIEW",
    description: " Marvel could really do with a win round about now. Bringing audiences back after a finale called “Endgame” was always going to be a tough sell. Even so, the lack of a gathering momentum in post-pandemic era of the studio’s Cinematic Universe has been conspicuous. While Doctor Strange set a strong ball rolling, there was a stumble in Thor’s stride and a downright limp in Ant-Man’s. Throw in a Jonathan Majors shaped scandal and increasing dependency on nostalgia headlining and the marvel rather begins to lose its -lous. Still, the so-called Multiverse Saga remains in early days. Perhaps a septet of intergalactic rejects can turn things around yet...",
    category: "Top Holly",
    date: "13/08/2023",
    number : 4
  },
  {
    id: 49,
    image: "https://thefilm742.files.wordpress.com/2023/05/img_9176.jpg?w=768&h=425&crop=1",
    name: "THE UNLIKELY PILGRIMAGE OF HAROLD FRY | REVIEW",
    description: " Rachel Joyce translates her first novel into her first screenplay with The Unlikely Pilgrimage of Harold Fry. There’s more than a touch of the Jonas Jonassonian to the tale, in which a dull pensioner traverses the length and breadth of Britain on foot. Fry boasts fewer comic spikes than Jonasson’s 100 year-old man but is no less eccentric, his story just as strangely believable an anecdote of very human quirk. Joyce’s ponderous words find happy union in the thoughtful eye of Hettie Macdonald, one half of the directing duo behind lockdown hit Normal People, and lush cinematography of Kate McCullough. The plotting is somber and steady but offers much welcome breathing space to appreciate the minutiae of English beauty, town and country alike...",
    category: "Top Holly",
     date: "13/08/2023",
     number : 5
   },      
   
   {
     id: 50,
     image: "https://thefilm742.files.wordpress.com/2023/04/img_8759.jpg?w=768&h=425&crop=1",
     name: "THE SUPER MARIO BROS. MOVIE | REVIEW",
     description: " If Nintendo seem slow to the uptake in finally mining their prized Mario empire for big screen franchising, there’s no doubting the memory of 1993’s Bob Hoskins led Super Mario Bros. flop spurred hesitation. It figures. Time, however, heals all wounds and today’s target audience may even be the children of parents born after that film’s release. Moreover, in the hands of the studio behind Despicable Me and The Secret Life of Pets, the Japanese gaming giant can breathe easy. Chris Meledandri and the Illumination team have yet to drop the ball at the box office. Not once in thirteen years and twelve films, two of which bested the billion dollar benchmark. That’s no mean feat and a track record The Super Mario Bros. Movie has no chance of breaking...",
     category: "Top Holly",
     date: "13/08/2023",
     number : 6
   }, 
   ////Hollywood more data
   {
     id: 51,
     image: "https://thefilm742.files.wordpress.com/2023/04/b8a43639-f23f-40f7-a8f5-dd50cf57745b.webp?w=768&h=425&crop=1",
     name: "DUNGEONS & DRAGONS: HONOUR AMONG THIEVES | REVIEW",
     description: " Many years have come and gone since Courtney Solomon – not to mention dodgy effects, dreadful acting and dismal writing – murdered Dungeons & Dragons at the multiplex. In spite of the two home video sequels that somehow limped out of its legacy, the film remains a remarkably risible tribute to a game of perhaps unparalleled cultural significance. Only now, two decades later, can the memory of Solomon’s effort be banished to the outer planes. Only with the release of Honour Among Thieves, which is, by all accounts, a tour-de-force of infectious blockbusting fun...",
     category: "HollywoodMore",
     date: "13/08/2023"
   }, 
   {
     id: 52,
     image: "https://thefilm742.files.wordpress.com/2023/03/img_8705.jpg?w=768&h=425&crop=1",
     name: "SHAZAM: FURY OF THE GODS | REVIEW",
     description: " Much has changed across DC’s Extended Universe since Shazam! first bolted into cinemas. A pass the parcel of creative control has seen Marvel’s murkier cousin shuffle between soft reboots and directional alt rights. As things stand, Henry Cavill and Ben Affleck are out, while Gal Gadot and Jason Momoa sit patiently on the bench. Robert Pattinson and Joaquin Phoenix, by contrast, enjoy a league of their own. When it comes to Shazam, the judge’s gavel has yet to fall and there’s little optimism in the jury. It would be a shame if Fury of the Gods marked the final bow for Zachary Levi’s lovably insecure supe but the battle for retention won’t be easy. It’s hard to see so second rate a sequel mirroring the success of its peppier predecessor nor enjoying anything like the audience adoration...",
     category: "HollywoodMore",
     date: "13/08/2023"
   }, 
   {
     id: 53,
     image: "https://thefilm742.files.wordpress.com/2023/03/img_8703-1.jpg?w=768&h=425&crop=1",
     name: "80 FOR BRADY | REVIEW",
     description: " There’s absurdity in the capacity of a film like 80 for Brady to boast three Oscar winners and a near-miss nominee as its leading quartet. A vague sense that something has gone rather awry in tinsel town. Is this the best available to such talent? From debutant director Kyle Marvin and two the writers of Booksmart – Sarah Haskins and Emily Halpern – this one is rote grey pound farce. Think Girls Trip meets Book Club by way of The Blind Side. An ungodly mix if ever one were. What’s more, as produced by NFL legend Tom Brady, it’s a blatant vanity project. And based on a true story don’t cha know?..",
     category: "HollywoodMore",
     date: "13/08/2023"
   },  

                //////////////////////////////////// Fitness Deta Start From Here //////////////////////////////////////////////////////

    {
      id: 54,
      image: "https://www.glofox.com/wp-content/uploads/2023/09/shutterstock_1930135445.jpg",
      name: "How to Hire Instructors for Your HIIT Workout Classes",
      description: "You’ve successfully built a fitness business that stands out from the crowd. But how do you keep your members engaged and coming back for more? Enter High-Intensity Interval Training (HIIT), a dynamic workout style that delivers efficient calorie burn, a heightened metabolic rate, and rapid results that fit into members’ busy schedules. ",
      category: "Fitness",
      date: "13/08/2023"
    },
    {
      id: 55,
      image: "https://www.glofox.com/wp-content/uploads/2023/07/shutterstock_504443035-1024x683.jpg",
      name: "Why Fitness Challenges are Essential to Fitness Studio Retention",
      description: "Did you know that fitness challenges are a great way to motivate your members, increase retention and give your clients more meaning and reasons to stick to their daily workouts? In fact, studies have shown that challenges and gamification help increase member motivation and make workouts more enjoyable and fun. And in an increasingly digital world, it’s great to know that gamification extends to fitness apps. So fitness challenges are a great tool to keep both your online and in person gym members accountable and motivated. ",
      category: "Fitness",
      date: "13/08/2023"
    },
    {
      id: 56,
      image: "https://www.glofox.com/wp-content/uploads/2023/07/shutterstock_525670930-1024x684.jpg",
      name: "How to Open a Personal Training Studio",
      description: "So you’ve decided to open a personal training studio—congratulations! By taking your passion for helping others thrive to the next level, you’re building a healthier community while creating a better living for yourself. There are many perks to being your own boss. But if you’re new to the whole “running your own business” thing, there are a few things you should know before diving in so that you’re set up for success. ",
      category: "Fitness",
      date: "13/08/2023"
    },
    {
      id: 57,
      image: "https://ik.imagekit.io/02fmeo4exvw/blogs/GettyImages-1364649132%20%281%29.jpg?tr=w-1000",
      name: "Is Trauma-informed Training the Next Fitness Frontier?",
      description: "Trauma has significant mental, physical and emotional effects, and it is exceedingly common, with 70% of U.S. adults experiencing a traumatic event in their lifetimes. It is therefore crucial that personal trainers have a basic understanding of trauma, how it shows up physically, how it affects clients’ ability to hit their health and fitness goals, and how to best support their clients who have been impacted by trauma.",
      category: "Fitness",
      date: "13/08/2023"
    },
    {
     id: 58,
      image: "https://blog.nasm.org/hubfs/Imported_Blog_Media/How-to-Make-Health-and-Fitness-a-Lifestyle.jpg",
      name: "FITNESS TIPS FOR LIFE: HOW TO MAKE HEALTH AND FITNESS A LIFESTYLE",
      description: "With the start of the New Year, many of us have made resolutions to improve our health and fitness. While having specific health and fitness goals in mind is excellent, people often go to extremes to accomplish these goals. They try the newest fad diet or workout trend and often end up exhausting both their mental and physical energy.",
      category: "Fitness",
      date: "13/08/2023"
    },
    {
      id: 59,
      image: "https://static.toiimg.com/thumb/103579736.cms?width=680&height=512&imgsize=1542069",
      name: " Drinks you should consume while working out",
      description: "Dehydration is the lack of adequate body fluids for the body to carry on normal functions at an optimal level. Dehydration occurs when the body loses more fluids than it takes in. Fluid deficits of more than 2 % of body weight can compromise endurance exercise performance.",
      category: "Fitness",
      date: "13/08/2023"
    },
    {
      id: 60,
      image: "https://ik.imagekit.io/02fmeo4exvw/blogs/GettyImages-852401728.jpg?tr=w-1000",
      name: "Unpacking Body Shame with a Licensed Psychologist",
      description: "Body shaming is when a person expresses unsolicited, mostly negative opinions or comments about someone else’s body or their own. While body shaming is usually associated with fat or skinny shaming, it's much broader in scope and includes being shamed for the size and shape of any or all body parts (e.g., height, hair texture, amount of hair or facial features).",
      category: "Fitness",
      date: "13/08/2023"
    },
    {
      id: 61,
      image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2021/06/how_to_improve_gut_health_getty_creative.jpeg.jpg",
      name: "3 powerful natural remedies to fix bloating by balancing gut bacteria",
      description: "Almost everyone experiences bloating, every now and then. Usually, it is caused by consuming certain foods and drinks, and swallowing air when you eat. Apart from this, bloating can also be due to more serious causes, such as constipation, a food intolerance and irritable bowel syndrome. Some people feel bloated around their period dates.",
      category: "Fitness",
      date: "13/08/2023"
    },
    {
      id: 62,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tlB-W6nR9rcmMZaHT1JAZlbJ4e5wn6voQA&usqp=CAU",
       name: "Instagram Captions Perfect For Those Sweaty Gym Selfies",
      description: "Whether you're already sipping a pumpkin spice latte or dutifully waiting until the season officially kicks off on Sept. 23, fall is nearly here. And whether you like to take advantage of the cooler temps to go for a run outside or use them as an excuse to hit the gym, working out is a perfect way to channel the back-to-business vibes of the season. And on the days when you do manage to get to the gym for a solid workout, we're big fans of commemorating the occasion with a well-deserved social media flex — or a real-talk selfie with a gym-related caption that acknowledges how hard you worked to make a sweat session happen that day.",
      category: "Fitness",
      date: "13/08/2023"
    },
    {
      id: 63,
      image: "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/19190529/download9.jpg",
      name: "500+ Words Essay on Health and Fitness",
      description: "We have always heard the word ‘health’ and ‘fitness’. We use it ourselves when we say phrases like ‘health is wealth’ and ‘fitness is the key’. What does the word health really mean? It implies the idea of ‘being well’. We call a person healthy and fit when he/she function well physically as well as mentally.",
      category: "Fitness",
      date: "13/08/2023"
    },
    {
      id: 64,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbsdByLMg_PWGrSf-hfC_q5daSXXgq9Ip2w&usqp=CAU",
      name: "Interview With A Personal Trainer: Helpful Fitness & Nutrition Advice From Caitlin & Reka",
      description: "Invest in a PT if you can! A good PT will knock out any nerves within the first few sessions. They will give you structure and an effective programme to follow which will save you hours of tedious cardio or hopping from one piece of kit to the next! If private PT is not an option for you, try a small group training class where the instructor can talk you through each exercise and ensure your form is correct from the get go. The last thing you want to do is get injured from poor form just when you’re starting out!",
      category: "Fitness",
      date: "13/08/2023"
    },
    {
      id: 65,
      image: "https://www.bluecoatsports.co.uk/wp-content/uploads/2023/03/squash-coach-teaching-young-child.jpg",
      name: "Children’s sports activities at Bluecoat Sports this Easter",
      description: "It’s important that children are provided with opportunities to learn, grow, and explore in a safe and nurturing environment. One of the most effective ways to do this is through engaging activities that capture children’s imaginations and spark their curiosity. By providing kids with the opportunity to partake in an activity that engages them, they can improve their social skills, coordination, mental health and gain a multitude of new skills.",
      category: "Top",
      date: "13/08/2023",
      number : 1,

    },

///////////////////////////// Food's Deta Start From Here //////////////////////////////////////////////////////
  {
  id: 66,
    image: "https://images.indianexpress.com/2016/02/kotthu-roti-with-salad-chili-base-2.jpg",
    name: "Get a taste of Ceylon in 3 courses, from Don’t Give A Fork",
    description: "Mumbai-based pop-up Don’t Give A Fork — set up by food bloggers Payal Bhuptani and Upasana Shukla Maheshwari — is onto their fifth outing this weekend with a Sri Lankan pop-up. Says Bhuptani, “We set up the blog two years ago and launched our first pop-up in August 2014.” The two partners are also travel enthusiasts, and most often come up with ideas for their pop-ups based on their trips. The Sri Lankan pop-up is a result of Maheshwari’s travels to the country in December last year",
    category: "The_latest",
    date: "14/08/2023"
   },
  {
    id: 67,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhX3Mgi5RURer378TRsJgeyT4g39_mOdPaA&usqp=CAU",
    name: "Why you should pick up a book that’s anti-food ",
    description: "Charred pizza, sausages that look like they belong in the bog, cannelloni that is rightly likened to ‘raw sewage’ by Tom Kennedy — the man responsible for documenting what are possibly the most tragic-looking meals you’ve ever seen — are for all to see on his Tumblr account ‘Dimly Lit Meals For One’. The US edition of a selection of the best — or worst, depending on how you look at it — shots will be out in a book next month. See a picture gallery of Dimly Lit Meals For One here.",
    category: "Food",
    date: "14/08/2023"
  },
  {
    id: 68,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdT2I8SySvaOf9G5n3vh2EYpbAg71L9bmuaQ&usqp=CAU",
    name: "How my mother made me try Potato fries ",
    description: "One of my distinct memories of food during childhood is rows and rows of (and potato chips and sabudana chips and fries!) drying in the sun on the terrace. More because we were asked to go up on the terrace regularly and see if the cover is fine; if there are no birds and then finally when they have dried, to bring them down.",
    category: "Food",
    date: "14/08/2023"
  },
  {
    id: 69,
    image: "https://images.indianexpress.com/2014/11/aaloo-parantha-main.jpg",
    name: "Breakfast like a king: Here’s how to make Aloo Paratha",
    description: "In my kitchen, Aloo Paratha presides over all other parathas. It’s indisputably the king of parathas. Since the past few weeks, we have been having them at least once every week for breakfast. As they say breakfast like a king; we need a king to do justice to it. Potato is a quintessential part of Indian cuisine, especially for a vegetarian. Breakfast, snack or main course – the menu is incomplete without potato dishes.",
    category: "Food",
    date: "14/08/2023"
  },
  {
    id: 70,
    image: "https://images.indianexpress.com/2023/09/recipe.jpg?w=640",
    name: "Try this ‘naturally high in protein’ dessert recipe to satiate your sugar cravings",
    description: "There is nothing quite like delicious desserts on a stressful day, after all ‘stressed’ spelled backward is ‘desserts’, making it one of the best ways to de-exhaust after a long busy day at work and give the much-needed energy boost! While most of us who are on a strict diet try to refrain from eating sweets due to their high sugar content and calories, it is obvious for us to look for healthier alternatives to satiate our sugar cravings.",
    category: "Food",
    date: "14/08/2023"
  },
  {
    id: 71,
    image: "https://images.indianexpress.com/2023/09/bhindi_1200_getty.jpg?w=640",
    name: "Should you eat okra or bhindi twice a week?",
    description: "Dan Gubler, PhD who is an expert on how natural molecules from plants can dramatically improve human health, shared on his Instagram that if one has diabetes, one of the best foods to control blood sugar and also to reverse insulin sensitivity is okra. “Okra contains phytonutrients called quercetin glucosides which in scientific terms helps reduce blood sugar levels, insulin levels, and overall metabolic health. Go, eat okra twice a week,” said Gubler.",
    category: "Food",
    date: "14/08/2023"
  },
  {
    id: 72,
    image: "https://images.indianexpress.com/2023/09/poha-sprouts-anshula_200.jpg?w=640",
    name: "Anshula Kapoor eats poha with sprouts; why should you too?",
    description: "What are some of the best breakfast combinations that you begin your day with? For Anshula Kapoor, there is nothing that beats the flavourful combination of poha with boiled sprouts. The social media influencer took to Instagram Stories to share a glimpse of relishing the all-time snack favourite.",
    category: "Food",
    date: "14/08/2023"
  },
  {
    id: 73,
    image: "https://images.indianexpress.com/2023/09/fruits_200_getty-1.jpg?w=640",
    name: "Dr Shriram Nene suggests these simple swaps to make your snacks and meals healthy",
    description: "If you are someone who is always dabbling with the question of how to make your snacks and meals healthier, you are at the right place. One of the best ways to do so is by making some simple swaps that can start right from your kitchen. Addressing this most common question, cardiothoracic surgeon Dr Shriram Nene recently shared a list of simple swaps that can help.",
    category: "Food",
    date: "14/08/2023"
  },
  {
    id: 74,
    image: "https://th-i.thgim.com/public/news/cities/Tiruchirapalli/fwr50e/article38172853.ece/alternates/LANDSCAPE_1200/Ty08bloggerstry",
    name: "Food bloggers a big hit among locals",
    description: "While people were confined to their homes during the lockdown as a precautionary measure against the spread of COVID-19, social media became a platform for quick recipes, budding home chefs and the most popular- food bloggers. People who would have otherwise spent their time doing regular jobs began to, through their videos, entertain people and also showcase food trends in the city.",
    category: "Food",
    date: "14/08/2023"
  },
  {
    id: 75,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUB-Y7Mk84NQEn1CD7rlQj-KYFuNWrIFkwGg&usqp=CAU",
    name: "Commonly Eaten Foods That Are Bad for Your Health and Your Wallet",
    description: "We all lead busy lives, and it can be hard to remember to eat healthily. Sometimes, it’s easier to just grab food off the shelf, thinking only of the convenience and not of the nutritional value. Processed foods are always on-hand, which is why they make so much money for manufacturers. And they’ve saved us time and energy in the past. But, at what cost? ",
    category: "Food",
    date: "14/08/2023"
  },
  {
    id: 77,
    image: "https://magazine.education.investing.com/wp-content/uploads/2021/09/Article-Image-BadDiet-DietSoda.jpeg",
    name: "This is the  Diet Cola",
    description: "Diet cola portrays itself as a healthy alternative to regular cola. After all, it’s sugar-free! And, it has no calories. It’s often been the go-to drink for dieters everywhere. Though Mayo Clinic says that it is okay if consumed in minimal quantities, people who drink more than a can a day could be headed for some serious harm. According to Healthline, studies have shown that diet colas aren’t so “diet’ after all. Artificial sweeteners can lead to chronic kidney disease, tooth decay (because of the acidic pH level), and an increased risk of osteoporosis, depression, and heart disease. More studies are needed to be 100% sure, but you might want to cut back on diet cola or avoid it totally.",
    category: "Food",
    date: "14/08/2023"
  },
  {
    id: 78,
    image: "https://magazine.education.investing.com/wp-content/uploads/2021/09/shutterstock_image-2022-08-30T115359.173.jpg",
    name: "American Cheese Slices",
    description: "Imitation cheese often has misleading packaging. These products, instead of being made with ingredients like milk fat the way normal cheese is, have vegetable oils, trans fats, flavorings, and preservatives. All of these ingredients make imitation cheeses much less healthy than real cheeses. You can identify imitation cheeses among other things, because they are considerably less expensive than real cheese.",
    category: "Food",
    date: "14/08/2023"
  },
   {
     id: 79,
     image: "https://magazine.education.investing.com/wp-content/uploads/2022/12/Article-Image-BadDiet-Chocolate-Covered-Rice-Cereal.jpeg",
     name: "Chocolate-Covered Rice Cereal",
     description: "Chocolate-covered rice cereals are often advertised as a great option for the little ones to have breakfast. What is not advertised, of course, is that they are one of the most harmful cereals on the market. A single serving of this cereal provides between 55 and 73% of the total sugar recommended for children in a day. In addition, many of these types also have colorants associated with the development of hyperactivity and attention deficit disorders..",
     category: "Food",
     date: "14/08/2023"
   },
  //Top Food data...................
  {
   id: 80,
   image: "https://magazine.education.investing.com/wp-content/uploads/2021/09/Article-Image-BadDiet-Palomitas-de-maiz-1-1.jpg",
   name: "Something New To Try Flavored Popcorn",
   description: "Natural popcorn can be a tasty and healthy snack, as it’s low in calories. Sadly, the ones that are sold ready-made in the supermarket are almost the opposite, especially since they have artificial flavorings. For example, caramel popcorn can be incredibly high in sugar and fat. A bag, even a small one, of caramel popcorn can contain 12.8 tablespoons of sugar and up to 564 calories. There is no doubt that preparing this snack at home and keeping it unflavored is a much better option than buying it. Disney movies are just as good, no matter the snack!",
   category: "Top",
   date: "13/08/2023",
   number : 2
  },

  ///////////////////// top post ////////////////
  {
    id: 81,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOyg9tZv87GfRi4Lfkkxy1ZnYwUV0Y9USRZg&usqp=CAU",
    name: "Skanda: The Attacker (2023)",
    description: "Is Skanda hit or flop? The music is composed by Thaman S, while the cinematography and editing are handled by Santosh Detake and Tammiraju, respectively. Skanda was released on September 28, 2023 to mixed-to-negative reviews from critics. The film grossed ₹59.20 crore against the budget of ₹50 crore and became a box-office bomb..",
    category: "Top",
    date: "12/08/2023",
    number : 3

  },
  
  {
    id: 82,
   image: "https://www.greaterkashmir.com/wp-content/uploads/2023/12/22DEC4U.jpg",
   name: "Poonch terror attack | Massive operation on to nab terrorists",
   description: "Massive combing operation to intercept group of terrorists, involved in Thursday’s ambush targetting army vehicles and killing four soldiers besides injuring three others, continued on Friday in dense forest areas of Dehra Ki Gali, Bufliyaz in Poonch’s Surankote subdivision.Amid aerial surveillance of the area, the army has intensified ground combing operations.",
   category: "Top",
   date: "23/12/2023",
   number : 4
  },
  {
    id: 83,
    image: "https://images.news18.com/ibnlive/uploads/2023/12/amit-shah-2023-12-c33db5c2d107e609b2e0a73e512bec82-3x2.jpeg?impolicy=website&width=510&height=356",
    name: "Amit Shah Read About Chanakya at 9 & Became One",
    description: "Amit Anil Chandra Shah, often called the Chanakya of Indian politics, first read Kautilya’s ‘Arthashastra’ (Sanskrit treatise on statecraft, politics, economics and military) when he was nine years old. Since then, he has read it several times and internalised one Chanakya Niti — “The king shall singly deliberate over secret matters; for ministers have their own ministers…” Kautilya stressed the need to maintain secrecy and keep the surprise element. Shah himself has said multiple times, “Success of a project depends on its secrecy”. As home minister, be it August 5, 2019, when Article 370 was abrogated or very recently when the government changed the entire jurisprudence by bringing in three new bills — very few had any idea that what Shah was up to.",
    category: "Top",
    date: "13/08/2023",
    number : 5
  },
  {
    id: 84,
    image: "https://thefilm742.files.wordpress.com/2023/05/img_9320.jpg?w=768&h=425&crop=1",
    name: "LOVE AGAIN | REVIEW",
    description: " Priyanka Chopra and Sam Heughan have chemistry. It’s bubbly, believable and worth rooting for. That’s half of the battle in any rom com and a casting coup for James C. Strouse’s Love Again – which, ironically, features Chopra’s real life husband, Nick Jonas, as the world’s worst date. You can’t make this stuff up. Chopra plays Mira Ray, a children’s book illustrator beset by grief, following the tragic death of her near-fiancé John (Arinzé Kene) two years prior...",
    category: "Top",
    date: "13/08/2023",
    number : 6
  },

  ///////////////////////////  TOP FITNESS ///////////////////////
  {
    id: 85,
    image: "https://www.hindustantimes.com/ht-img/img/2023/12/23/550x309/emily-wade-DfqQKk2qq_1688888225771_1703310786757.jpg",
    name: "How to limit screen time for kids: Psychologist shared tips",
    description: " One of the mistakes we make in parenting is asking kids to avoid screen time. With the changing times, it is important that children have healthy screen time in order to gain information and knowledge. However, when they cross the limit of screen time and become addicted to it, it can become a problem. Some people draw concern labeling screens a privilege but to me, that's what they are (outside of using them for schoolwork or some project - I'm talking about using screens for mostly entertainment value. They are nice to have, wrote Psychologist Jazmine McCoy. It is important to build a foundation of open communication, healthy screen habits and digital safety in kids at an early age.",
    category: "Top Fitness",
    date: "13/08/2023",
    number : 1
  },
  {
    id: 86,
    image: "https://www.hindustantimes.com/ht-img/img/2023/12/22/960x540/tredfghgf_1703233446775_1703233491243.jpg",
    name: "5 common cognitive distortions: Therapist explains",
    description: "Cognitive distortions refer to irrational thought patterns that happen during the onset of certain psychopathological states such as anxiety and depression.As humans we like to think that we apply pure logic and control many outcomes in life. But we actually are often guilty of cognitive distortions. These are thought patterns that are not based on reality or facts. They are a distortion of reality, wrote Psychologist Alf Lokkertsen",
    category: "Top Fitness",
    date: "13/08/2023",
    number : 2
  },
  {
    id: 87,
    image: "https://www.hindustantimes.com/ht-img/img/2023/12/20/550x309/insomnia-foods_1703065763551_1703065794468.jpeg",
    name: "Top foods to deal with insomnia during menopause",
    description: "Around 25% of women experience sleep issues during menopause which could further impact their well-being. Insomnia and sleep disturbances can affect your quality of life significantly. A well-balanced diet can help relax muscles, ease hot flashes and improve sleep quality. Nutritionist Lovneet Batra in her latest Instagram post talks about foods that can help deal with insomnia during menopause.",
    category: "Top Fitness",
    date: "13/08/2023",
    number : 3
  },
  {
    id: 88,
    image: "https://www.hindustantimes.com/ht-img/img/2023/12/19/550x309/Head-of-PGIMER-s-endocrinology-department--Dr-Sanj_1699989644861_1702975381545.jpg",
    name: "Living well with diabetes: Diet plan, exercise tips",
    description: "Healthy Diet – Diet is the most important aspect of good diabetes control while lot of food diets and restrictive diets can be very helpful, many people find it non-sustainable in long term. It is important to include generous amount of salads, vegetables and fresh fruits in diet. Carbohydrates which includes Bread/Rice/Roti should be consumed not more than 1/4th of our meal. Instead of what we eat, we should aim at changing the proportions of the food items in our diet. Beverages and other very high sugar content foods should be avoided.Exercise – Any form of exercise helps. It is recommended to get at least 150 minutes of moderate intensely exercise/week. Many professionals can’t find dedicated time for exercise in that case whatever activity we can fit into our daily schedule can be helpful. Even a little physical activity is better than no activity. Use activity tracker for motivation if needed or workout with family/friends.",
    category: "Top Fitness",
    date: "13/08/2023",
    number : 4
  },
  {
    id: 89,
    image: "https://www.hindustantimes.com/ht-img/img/2023/12/18/550x309/3868928_1702888818544_1702888828077.jpg",
    name: "Year Ender 2023: From biohacking to metaverse wellness, 8 top health and fitness trends that went viral this year",
    description: "As we bid farewell to 2023, it's intriguing to reflect on the dynamic shifts and innovations that have taken the health and fitness world by storm. From cutting-edge technologies to holistic lifestyle approaches, the year has witnessed a myriad of trends that have captured both attention and enthusiasm. The top health and fitness trends of this year reflect a harmonious blend of functional exercises, ancient wellness practices, and a collective desire for personalised, sustainable lifestyles. It's time to look back at the practices that have reshaped the way we approach our physical and mental well-being. Scroll down to check out the most popular trends that have not only sparked conversations but have also paved the way for a healthier and more vibrant future.",
    category: "Top Fitness",
    date: "13/08/2023",
    number : 5
  },
  {
    id: 90,
    image: "https://www.hindustantimes.com/ht-img/img/2023/12/17/550x309/v0hytd_1702779873047_1702779906585.jpg",
    name: "5 signs of Vitamin D deficiency",
    description: "Vitamin D is an important nutrient that should be included in the daily diet. Deficiency of Vitamin D in the body can cause a lot of health issues. If you suspect a vitamin D deficiency - first you must confirm with a blood test, then treat it according to your healthcare practitioner's supplement recommendations, wrote Nutritionist Zoha Matin. Here are a few signs of Vitamin D deficiency.",
    category: "Top Fitness",
    date: "13/08/2023",
    number : 6
  },

  ////////////////////////////////////// top techno /////////////////////
  {
    id: 91,
    image: "https://images.indianexpress.com/2023/12/tech-news-daily-dec-23.jpg?w=640",
    name: "Tech News Today: Millions consider deleting Instagram, OpenAI seeks $100B funds, and more",
    description: "The world of technology is always buzzing with the latest news and developments. This week saw OpenAI attempting to raise $100 billion in a new funding round, the Beeper vs Apple battle finally reaching a likely conclusion, and a reveal about the price of a device from the Redmi Note 13 series. Here are the 5 biggest tech stories making waves right now.",
    category: "Top tech",
    date: "13/08/2023",
    number : 1
  },
  {
    id: 92,
    image: "https://images.indianexpress.com/2023/12/2023-in-space-featured.jpg?w=640",
    name: "2023 in spaceflight: Chandrayaan-3 and other missions that defined space exploration this year",
    description: "When Chandrayaan 3 made a soft landing on the Moon this year, it underlined a hard truth — India is right up there on the list of the biggest spacefaring superpowers in the world along with the United States, China, and Russia. While the Indian Space Research Organisation’s grand success with the mission is quite monumental, that was not the only space exploration mission that pushed the boundaries of what we thought was possible. Despite all of the impressive feats that were conducted this year, it did not quite live up to what happened in 2022. During that year, NASA launched the Artemis 1 Moon mission, marking the first step in humanity’s return to the Moon. Before that, we got the first images from the pathbreaking James Webb Space Telescope. China also made waves with the completion of its first space station.",
    category: "Top tech",
    date: "13/08/2023",
    number : 2
  },
  {
    id: 93,
    image: "https://images.indianexpress.com/2022/08/OnePlus-10T-5G-gallery-1.jpg?w=630",
    name: "OnePlus 10T 5G: Check out the latest flagship phone from OnePlus",
    description: "The OnePlus 10T 5G was launched at a company event in New York yesterday. Here's a closer look at the device. The OnePlus 10T features a large 6.7-inch HDR10+ 10-bit AMOLED display. The OnePlus 10T features a triple camera system with a 50MP main camera, a 12MP ultrawide camera and a third macro camera.The phone comes with 150W SuperVooc fast charging.The OnePlus 10T 5G comes with the new HyperBoost Gaming Engine for better gaming performance.",
    category: "Top tech",
    date: "13/08/2023",
    number : 3
  },
  {
    id: 94,
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/billionaire-elon-musk-264412365-16x9.jpg?VersionId=eil5fA8jUKbcShN0.yygRqjfmUuRhUai&size=690:388",
    name: "Elon Musk says internet is full of woke nonsense, promises Grok AI will get better with time",
    description: "Elon Musk has often accused OpenAI's ChatGPT of being 'too woke' and never really shies away from criticising the AI chatbot. So when Musk's own chatbot, GrokAI, came to town, comparisons started happening. A Twitter (now called X) user took to the platform and compared Grok with ChatGPT, saying that the former is also as woke as the latter. Responding to the user, Musk said that the internet on which GrokAI has been trained is woke and that he promises that the chatbot will get better with time.",
    category: "Top tech",
    date: "13/08/2023",
    number : 4
  },
  

  {
    image : "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/87075149-2a5b-4c3a-851b-84c75ab97fdd/2.jpg",
    category : "Advertisement"

  },
  {
    image : "https://static.picmaker.com/scene-prebuilts/thumbnails/33e4d6cc-d8fd-4f9d-ae39-a08a49be0bbd.png",
    category : "Advertisement1"
  },
  {
    image : "https://images.ethoswatches.com/img/uploads/banners/2023/11/ethosmenu_30_11_2023_2055287804.jpg?tr=w-335"
    ,category : "Advertisement2"
  }

])}
  
 

module.exports = data