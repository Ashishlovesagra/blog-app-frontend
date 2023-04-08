import { createContext, useState } from "react";
import React from "react";

export const content = createContext();

function DataApi(props) {
  const [data, setData] = useState([
    {
      id: 1,
      release: "25 January 2023",
      imdb: "6.4/10",
      category: "bollywood",
      Dname: "Ashish",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://akm-img-a-in.tosshub.com/aajtak/images/story/202301/pathaananana-sixteen_nine.jpg?size=948:533",
      name: "Pathaan",
      content:
        "Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra of Yash Raj Films. The fourth installment in the YRF Spy Universe, it stars Shah Rukh Khan, Deepika Padukone, and John Abraham, alongside Dimple Kapadia and Ashutosh Rana.",
    },
    {
      id: 2,
      release: "5 August 2022",
      imdb: "8.6/10",
      category: "bollywood",
      image: "http://in.bmscdn.com/events/moviecard/ET00329656.jpg",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      name: "Sita Ramam",
      content:
        "Sita Ramam is a 2022 Indian Telugu-language period romantic drama written and directed by Hanu Raghavapudi. Produced by Vyjayanthi Movies and Swapna Cinema, the film stars Dulquer Salmaan, Mrunal Thakur (in her Telugu debut), Rashmika Mandanna and Sumanth. Set in 1964, Lieutenant Ram",
    },
    {
      id: 3,
      release: "10 July 2015",
      imdb: "8.0/10",
      category: "bollywood",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
      name: "Bahubali: The Beginning",
      content:
        "Baahubali: The Beginning is a 2015 Indian epic action film co-written and directed by S. S. Rajamouli, and produced by Shobu Yarlagadda and Prasad Devineni under Arka Media Works. The film was produced in Tollywood, the centre of Telugu language films in India",
    },
    {
      id: 4,
      release: "24 February 2023",
      imdb: "6.4/10",
      category: "bollywood",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://assets.gadgets360cdn.com/pricee/assets/product/202301/Selfiee_1674473988.jpg",
      name: "Selfiee",
      content:
        "Selfiee is a 2023 Indian Hindi-language comedy-drama film directed by Raj Mehta and produced by Dharma Productions, Magic Frames, Prithviraj Productions, Cape of Good Films and Star Studios. The film stars Akshay Kumar and Emraan Hashmi in lead roles while Diana Penty and Nushrratt Bharuccha play supporting roles.",
    },
    {
      id: 5,
      release: "17 February 2023",
      imdb: "5.4/10",
      category: "bollywood",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://m.media-amazon.com/images/M/MV5BNGY4YTdhMGYtNDdiNC00Mjc3LTlkZDEtNTIxMDNlNmU3NDdmXkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg",
      name: "Shehzada",
      content:
        "Shehzada is a Hindi-language action comedy drama helmed by Rohit Dhawan. The story and the dialogue for this film were penned by Trivikram Srinivas and Hussain Dalal. The movie stars Kartik Aaryan and Kriti Sanon in the lead roles, along with Manisha Koirala, Paresh Rawal, Ronit Roy, and many other supporting actors. ",
    },
    {
      id: 6,
      release: "12 April 2002",
      imdb: "7.6/10",
      category: "hollywood",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
      name: "Harry Potter",
      content:
        "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.",
    },
    {
      id: 7,
      release: "18 December 2009",
      imdb: "7.9/10",
      category: "hollywood",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://pbs.twimg.com/media/Fa27TR6UsAAaJX1?format=jpg&name=900x900",
      name: "Avatar",
      content:
        "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. ",
    },
    {
      id: 8,
      release: "19 December 1997",
      imdb: "7.9/10",
      category: "hollywood",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://www.tvguide.com/a/img/catalog/provider/1/2/1-9050537522.jpg",
      name: "Titanic",
      content:
        "James Cameron's Titanic is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the ship of dreams",
    },
    {
      id: 9,
      release: "1 May 2008",
      imdb: "7.9/10",
      category: "hollywood",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://www.themoviedb.org/t/p/original/jk3v9PjYlKblxgol0GIimjnjdbs.jpg",
      name: "Iron Man",
      content:
        "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors.",
    },
    {
      id: 10,
      release: "22 June 2001",
      imdb: "6.8/10",
      category: "hollywood",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://images.moviesanywhere.com/8356b7f3d8a48b55698a6327c491fcbf/cac224c3-53f3-486c-a526-52969ff271e1.jpg",
      name: "The Fast and the Furious",
      content:
        "Dominic Toretto (Vin Diesel) enjoys the adrenaline of street car racing and his fans treat him like a rock star. After a blazing encounter with the ruthless Johnny Tran, Dom decides to take Brian (Paul Walker), a newcomer to street racing, under his wing. Dom's sister Mia sees something she likes in Brian, too. ",
    },
    {
      id: 11,
      category: "technology",
      image:
        "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/08/04022409/WHAT-IS-BLOCKCHAIN.png",
      name: "BlockChain",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      content:
        "A blockchain is “a distributed database that maintains a continuously growing list of ordered records, called blocks.” These blocks “are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. ",
    },
    {
      id: 12,
      category: "technology",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-web-developer-1024x1024.jpg",
      name: "Full Stack Developer",
      content:
        "A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node) ",
    },
    {
      id: 13,
      category: "technology",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg",
      name: "Data Science",
      content:
        "Data science is a field of applied mathematics and statistics that provides useful information based on large amounts of complex data or big data. Data science, or data-driven science, combines aspects of different fields with the aid of computation to interpret reams of data for decision-making purposes. ",
    },
    {
      id: 14,
      category: "technology",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://img.securityinfowatch.com/files/base/cygnus/siw/image/2021/10/bigstock_Internet_Of_Things__Iot_Conce_413663834.6165ebd7685e3.png?auto=format,compress&w=500&h=281&fit=clip",
      name: "IOT",
      content:
        "The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet. ",
    },
    {
      id: 15,
      category: "technology",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://newsonair.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-13-at-18.13.09.jpeg",
      name: "Cyber Security",
      content:
        "Cyber security can be described as the collective methods, technologies, and processes to help protect the confidentiality, integrity, and availability of computer systems, networks and data, against cyber-attacks or unauthorized access. ",
    },
    {
      id: 16,
      category: "food",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      name: "Burger",
      content:
        "A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. ",
    },
    {
      id: 17,
      category: "food",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://b.zmtcdn.com/data/pictures/chains/3/19680713/fe8c80fa162c790264a597b45e7e6580.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      name: "Pizza",
      content:
        "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.",
    },
    {
      id: 18,
      category: "food",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
      name: "Dosa",
      content:
        "A dosa, also called dosai, dosey, dwashi or dosha is a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are popular in South Asia as well as around the world. Dosas are served hot, often with chutney and sambar.",
    },
    {
      id: 19,
      category: "food",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJY55GOBgKmIC8mH2yMoyJEU3ybvEQJe4Dg&usqp=CAU",
      name: "Spring roll",
      content:
        "Spring rolls are rolled appetizers or dim sum commonly found in Chinese and other Southeast Asian cuisines. The kind of wrapper, fillings, and cooking technique used, as well as the name, vary considerably within this large area, depending on the region's culture. They are filled with vegetables and other ingredients.",
    },
    {
      id: 20,
      category: "food",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      image: "https://img4.nbstatic.in/tr:w-500/56ab0c3d0b04512cde6af3ff.png",
      name: "Vada Pav",
      content:
        "Vada pav, alternatively spelt wada pao, is a vegetarian fast food dish native to the Indian state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun sliced almost in half through the middle. It is generally accompanied with one or more chutneys and a green chili pepper.",
    },
    {
      id: 21,
      category: "fitness",
      image:
        "https://i.insider.com/600af7c2c94799001992cc62?width=1136&format=jpeg",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      name: "Yoga",
      content:
        "Our Yoga section addresses the origins and beliefs associated with yoga, the physical and mental benefits derived from regularly performing yoga classes, and the various types, styles and techniques associated with it. ",
    },
    {
      id: 22,
      category: "fitness",
      image:
        "https://blogscdn.thehut.net/wp-content/uploads/sites/478/2018/06/27165356/2017-06-26-34636-MP-NEW-LINES-RUNNING-LB-SESSION23711-11_1200x672_acf_cropped_1200x672_acf_cropped_1200x672_acf_cropped_1200x672_acf_cropped.jpg",
      name: "Cardiovascular",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      content:
        "Our Cardiovascular section includes discussions related to the overall functionality of the cardiovascular system, health and fitness benefits derived from regularly performing a cardiovascular exercise routine, and specific approaches to achieving your unique and personal cardiovascular fitness and health goals.",
    },
    {
      id: 23,
      category: "fitness",
      image:
        "https://img.mensxp.com/media/content/2018/Apr/welcome-to-the-era-of-night-club-like-gyms-where-nobody-is-actually-interested-in-lifting-1400x653-1524567536.jpg?w=820&h=540&cc=1",
      name: "General Fitness",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      content:
        "Our General Fitness section is ideal for individuals that are just starting out on their journey to better health and fitness, or for individuals that are looking for new information, approaches and tips designed to take their level of health and fitness to the next level. This section addresses a variety of unique and specific health and fitness goals.",
    },
    {
      id: 24,
      category: "fitness",
      image:
        "https://cdn.tinybuddha.com/wp-content/uploads/2013/07/Meditating-1.jpg",
      name: "Meditation",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      content:
        "Our Meditation section addresses the origins and beliefs associated with meditation, the physical and mental benefits derived from regularly performing meditation and the various types, styles and techniques associated with it.",
    },
    {
      id: 25,
      category: "fitness",
      image:
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/pilates-machine-reformer-1296x728-header.jpg?w=1155&h=1528",
      name: "Pilates ",
      Dname: "",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      content:
        "Our Pilates section addresses the origins and beliefs associated with Pilates, the physical and mental benefits derived from regularly performing Pilates classes, and the various types, styles and techniques associated with it.",
    },
  ]);
  return (
    <content.Provider value={[data, setData]}>
      {props.children}
    </content.Provider>
  );
}

export default DataApi;
