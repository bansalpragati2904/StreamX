const movies = [
    {
        id: "mr-sunshine",
        title: "Mr. Sunshine",
        category: "K-Drama Series",
        year: "2018",
        duration: "Series",
        description: "A historical Korean drama about an American military officer returning home.",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Mr._Sunshine_%282018_TV_series%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        video: "https://www.youtube.com/embed/rPJSo4fhtRU"
    },
    {
        id: "alchemy-of-souls",
        title: "Alchemy of Souls",
        category: "K-Drama Series",
        year: "2022",
        duration: "Series",
        description: "A fantasy romance involving magic and soul-shifting.",
       image: "https://upload.wikimedia.org/wikipedia/en/b/b5/Alchemy_of_Souls.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
       video: "https://www.youtube.com/embed/nlRw1CGbFU0"
    },
    {
        id: "extraordinary-attorney-woo",
        title: "Extraordinary Attorney Woo",
        category: "K-Drama Series",
        year: "2022",
        duration: "Series",
        description: "A brilliant rookie attorney solves challenging legal cases.",
        image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22283467_b_v11_ac.jpg",
        video: "https://www.youtube.com/embed/MxeXECe2t-c"
    },
    {
        id: "the-glory",
        title: "The Glory",
        category: "K-Drama Series",
        year: "2022",
        duration: "Series",
        description: "A woman plans revenge against the people who bullied her.",
        image: "https://image.tmdb.org/t/p/original/eLmsw0b1EJhdVBBfwdEGvONU90U.jpg",
        video: "https://www.youtube.com/embed/tqVVrTvrI8U"
    }
];

/* BOLLYWOOD */

const bollywood = [
    // {
    //     id: "scam-1992",
    //     title: "Scam 1992: The Harshad Mehta Story",
    //     category: "Hindi Web Series",
    //     year: "2020",
    //     duration: "Series",
    //     rating: "9.2",
    //     description: "The rise and fall of stockbroker Harshad Mehta.",
    //     image: "https://image.tmdb.org/t/p/w500/placeholder.jpg"
    // },
    // {
    //     id: "gullak",
    //     title: "Gullak",
    //     category: "Hindi Web Series",
    //     year: "2019",
    //     duration: "Series",
    //     rating: "9.1",
    //     description: "Everyday life of a middle-class North Indian family.",
    //     image: "https://image.tmdb.org/t/p/w500/placeholder.jpg"
    // },
    {
        id: "aspirants",
        title: "Aspirants",
        category: "Hindi Web Series",
        year: "2021",
        duration: "Series",
        rating: "9.1",
        description: "Three friends navigate UPSC preparation and life.",
        image: "https://m.media-amazon.com/images/S/pv-target-images/7740854eeba7524c42252fd3def2646e1a718384a825f21f5bfdc7d1352f2b04.png",
        video: "https://www.youtube.com/embed/jWUQ2A-LxNo"
    },
    {
        id: "panchayat",
        title: "Panchayat",
        category: "Hindi Web Series",
        year: "2020",
        duration: "Series",
        rating: "9.0",
        description: "An engineering graduate adjusts to life in a village.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMlT5ttgREKTe57nl7cmUsTHGPuM3VvXMSmEBAIvwZlM9Bu-LJQt8lqh-Eir12GnjJWXLcNA&s=10",
        video: "https://www.youtube.com/embed/mojZJ7oeD_g"
    },
    {
        id: "kota-factory",
        title: "Kota Factory",
        category: "Hindi Web Series",
        year: "2019",
        duration: "Series",
        rating: "9.0",
        description: "Students navigate coaching culture and competitive exams.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZuoUSwTMdgYjIZglurAETKajn9xf-y4GJAv-mwktLXysJtMDxRxCG7_xwi6xAmhAnEUie&s=10",
        video: "https://www.youtube.com/embed/pNZQ6msbOvM"
    },
    // {
    //     id: "tvf-pitchers",
    //     title: "TVF Pitchers",
    //     category: "Hindi Web Series",
    //     year: "2015",
    //     duration: "Series",
    //     rating: "9.0",
    //     description: "Four professionals leave their jobs to pursue a startup.",
    //     image: "https://image.tmdb.org/t/p/w500/placeholder.jpg"
    // },
    {
        id: "the-family-man",
        title: "The Family Man",
        category: "Hindi Web Series",
        year: "2019",
        duration: "Series",
        rating: "8.6",
        description: "An intelligence officer balances missions and family life.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaksbrNWT6gOxntTt1CxRPSjjyZ2s0x6r_tM_TRx_yXLSd80j3XTYNvHM&s=10",
        video: "https://www.youtube.com/embed/XatRGut65VI"
    },
    
    {
        id: "sacred-games",
        title: "Sacred Games",
        category: "Hindi Web Series",
        year: "2018",
        duration: "Series",
        rating: "8.5",
        description: "A Mumbai cop becomes involved in a dangerous mystery.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5iQVUMmCBKWoRRAjY4qORrvL2SgxW8dSESz9BuRTIuB0L8AGgw1SkXNEGRxc6upBTSRpPA&s=10",
        video: "https://www.youtube.com/embed/AkUgf2jIPyI"
    },
    {
        id: "asur",
        title: "Asur",
        category: "Hindi Web Series",
        year: "2020",
        duration: "Series",
        rating: "8.5",
        description: "Investigators pursue a killer in a mythology-inspired thriller.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIzSa0nKHH8mK32ck9lMybKze4acTKsITzOTv6SjXxdtxpY7NVcPtC1jRkvj0Ff23tAh5yw&s=10",
        video: "https://www.youtube.com/embed/oveko3h4pxk"
    },
    {
        id: "mirzapur",
        title: "Mirzapur",
        category: "Hindi Web Series",
        year: "2018",
        duration: "Series",
        rating: "8.4",
        description: "A crime saga about power and mafia rivalries.",
        image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/mirzapur-the-movie-et00417686-1787817242.jpg",
        video: "https://www.youtube.com/embed/5vMWZhHPlaw"
    }
];

/* ANIME */

const anime = [
    {
        id: "spirited-away",
        title: "Spirited Away",
        category: "Anime Movie",
        year: "2001",
        duration: "2h 5m",
        rating: "Fantasy",
        description: "A young girl enters a magical world.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BOXxai36m4TLf6kXGg9eCzc6JDDbyr6cO6GwsPvgl-BWGCaIw0X3LbP6Vy18dXX9gAvM&s=10",
         video: "https://www.youtube.com/embed/X-EkKB-KWVo"
    },
    {
        id: "your-name",
        title: "Your Name",
        category: "Anime Movie",
        year: "2016",
        duration: "1h 46m",
        rating: "Romance",
        description: "Two teenagers mysteriously begin switching bodies.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uGf6hrJrdacDNQjKQNa1hU2EBAnDgWcvafdM7mnNNN3mPM3rfODurZlx7qDKEgvRQkKf&s=10",
        video: "https://www.youtube.com/embed/xU47nhruN-Q"
    },
    {
        id: "demon-slayer-mugen-train",
        title: "Demon Slayer: Mugen Train",
        category: "Anime Movie",
        year: "2020",
        duration: "1h 57m",
        rating: "Action",
        description: "Tanjiro and his companions join a dangerous train mission.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvegThrmn0ya8LeiHlEGgVFtvc_BmLf0MIIef1U4t4ZAVtdHm9SVsSfn4O0dw65VHfS2x&s=10",
        video: "https://www.youtube.com/embed/ATJYac_dORw"
    },
    {
        id: "princess-mononoke",
        title: "Princess Mononoke",
        category: "Anime Movie",
        year: "1997",
        duration: "2h 14m",
        rating: "Fantasy",
        description: "A warrior becomes caught between humans and forest spirits.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhhXRSGGpVrqeICGcpaQmvMFCe8es6eSSLTTs-tt9mENbyAZSNeeqsqnYo2P55HpCT22M&s=10",
         video: "https://www.youtube.com/embed/vf6c6n35wr4"
    },
    {
        id: "akira",
        title: "Akira",
        category: "Anime Movie",
        year: "1988",
        duration: "2h 4m",
        rating: "Cyberpunk",
        description: "A biker becomes involved in a dangerous experiment.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarF0dMDOCwpGu2C9lyidkzn1g7byFaIyN4SHbmISAqg&s",
        video: "https://www.youtube.com/embed/nA8KmHC2Z-g"
    },
    {
        id: "one-piece",
        title: "One Piece",
        category: "Anime Series",
        year: "1999",
        duration: "Series",
        rating: "Adventure",
        description: "Luffy and his crew search for the legendary treasure.",
        image: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_QL75_UY281_CR8,0,190,281_.jpg",
        video: "https://www.youtube.com/embed/LHTYpWI3S6Q"
    },
    {
        id: "attack-on-titan",
        title: "Attack on Titan",
        category: "Anime Series",
        year: "2013",
        duration: "Series",
        rating: "Dark Fantasy",
        description: "Humanity fights for survival against giant Titans.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVLwmeJQBHNxGE8AMaCGWQLWoCUZMFJvuJy0nKdDfSnSXITF69Ivwb1qqnZNgyloaCKPo&s=10",
        video: "https://www.youtube.com/embed/MGRm4IzK1SQ"
    },
    // {
    //     id: "jujutsu-kaisen",
    //     title: "Jujutsu Kaisen",
    //     category: "Anime Series",
    //     year: "2020",
    //     duration: "Series",
    //     rating: "Action",
    //     description: "A student enters the world of jujutsu sorcerers.",
    //     image: "https://image.tmdb.org/t/p/w500/placeholder.jpg"
    // },
    // {
    //     id: "frieren",
    //     title: "Frieren: Beyond Journey's End",
    //     category: "Anime Series",
    //     year: "2023",
    //     duration: "Series",
    //     rating: "Fantasy",
    //     description: "An elven mage reflects on time and friendship.",
    //     image: "https://image.tmdb.org/t/p/w500/placeholder.jpg"
    // },
    // {
    //     id: "fullmetal-alchemist-brotherhood",
    //     title: "Fullmetal Alchemist: Brotherhood",
    //     category: "Anime Series",
    //     year: "2009",
    //     duration: "Series",
    //     rating: "Adventure",
    //     description: "Two brothers search for a way to restore what they lost.",
    //     image: "https://image.tmdb.org/t/p/w500/placeholder.jpg"
    // }
];

/* ANIMATED MOVIES */

const cartoons = [
    {
        id: "ne-zha-2",
        title: "Ne Zha 2",
        category: "Animated Movie",
        year: "2025",
        duration: "2h 24m",
        description: "An animated fantasy adventure featuring Ne Zha and Ao Bing.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qKWrdJdsMGroNqzXyrpJsbNNB5QLKJg_BICs3PIX0VbPnPJq4xyV-SN2EJhaCVvRWaRsnA&s=10",
        video: "https://www.youtube.com/embed/ETlOSBR92Fs"
    },
    {
        id: "zootopia-2",
        title: "Zootopia 2",
        category: "Animated Movie",
        year: "2025",
        duration: "Movie",
        description: "Judy Hopps and Nick Wilde investigate a new mystery.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnghiPFeMv93F6o_6jIdJl7DkBvuLP0dkOF4wc4bdMZplEwqQHxiuoc2EUrfbpanUAZ1r5nA&s=10",
        video: "https://www.youtube.com/embed/BjkIOU5PhyQ"
    },
    {
        id: "inside-out-2",
        title: "Inside Out 2",
        category: "Animated Movie",
        year: "2024",
        duration: "1h 36m",
        description: "New emotions arrive as Riley enters her teenage years.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxN_rXyicI6JFjnOm1lVeoYG0w99CF5uW0NHjpvMaDgil6kVQxZ76qTQXu0V10D_WwBhGPg&s=10",
        video: "https://www.youtube.com/embed/LEjhY15eCx0"
    },
    {
        id: "super-mario-galaxy-movie",
        title: "The Super Mario Galaxy Movie",
        category: "Animated Movie",
        year: "2026",
        duration: "Movie",
        description: "Mario and friends embark on a galactic adventure.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxtRWKUe4DHwPnKiQhYrDLIdg0kCUYwYZTTU85fBl6g-OAu41CsLOMnE6UOSzlsAJIiqIHQ&s=10",
        video: "https://www.youtube.com/embed/En5QZmL5R1s"
    },
    {
    id: "doraemon",
    title: "Doraemon: Stand by Me",
    category: "Animated Movie",
    year: "2014",
    duration: "1h 35m",
    description: "Doraemon helps Nobita prepare for a new chapter in life.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNJScqMcaSuADVBMNBpPrekF9dfVMJJFjuxt6ULkV-2o90WHaeRGjPU6klZV-tgquKH62wQ&s=10",
    video: "https://www.youtube.com/embed/qP98kx8xrAQ"
},
{
    id: "shinchan",
    title: "Shinchan: Bungle in the Jungle",
    category: "Animated Movie",
    year: "2000",
    duration: "1h 30m",
    description: "Shinchan and his family get caught up in a jungle adventure.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzuCY0Qe8lwF2KermdGi1vSoELajJoZB5iRRRCZz6R66YYDCLj6ehfidFL3mcixs4zZhDljQ&s=10",
    video: "https://www.youtube.com/embed/Hue0SK-UjRo"
},
{
    id: "chhota-bheem",
    title: "Chhota Bheem: The Throne of Bali",
    category: "Animated Movie",
    year: "2013",
    duration: "1h 8m",
    description: "Bheem and his friends embark on an exciting adventure in Bali.",
    image: "https://i.ytimg.com/vi/AH8n0utp7SM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDflxKmqFICLDKrzZt7FvO1tVTheQ",
    video: "https://www.youtube.com/embed/9wfJtRWTvBk"
}
];

/* PODCASTS */

const podcasts = [
    {
        id: "ranveer-allahbadia",
        title: "The Ranveer Show",
        category: "Indian Podcast",
        year: 2019,
        duration: "Podcast",
        description: "Long-form conversations with entrepreneurs and experts.",
        image: "https://i.ytimg.com/vi/2ucsfah3mGI/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/NL5-8d4DXb8"
    },
    {
        id: "figuring-out",
        title: "Figuring Out with Raj Shamani",
        category: "Indian Podcast",
        year: 2021,
        duration: "Podcast",
        description: "Conversations about business, careers and society.",
        image: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/86ceac96-3deb-482f-97c0-76d4665fc099/86ceac96-3deb-482f-97c0-76d4665fc099-1239610021.jpg",
        video: "https://www.youtube.com/embed/x63HCoDfAhQ"
    },
    {
        id: "dostcast",
        title: "Dostcast",
        category: "Indian Podcast",
        year: 2019,
        duration: "Podcast",
        description: "Casual conversations with creators and entrepreneurs.",
        image: "https://m.media-amazon.com/images/M/MV5BYjZhNjhkNzUtNDU2Yi00ZDE3LTk2ZmQtZGM2N2JlNzEwOGZmXkEyXkFqcGc@._V1_.jpg",
         video: "https://www.youtube.com/embed/mCcJ2p_jG84"
    },
    {
        id: "seen-and-unseen",
        title: "Seen and the Unseen",
        category: "Indian Podcast",
        year: 2016,
        duration: "Podcast",
        description: "Discussions on Indian society, history and culture.",
        image: "https://seenunseen.in/wp-content/uploads/2020/11/TheSeenAndTheUnseen_illustration49A_1920X1080.jpg",
        video: "https://www.youtube.com/embed/nC-QcuozEuo"
    },
    // {
    //     id: "the-internet-said-so",
    //     title: "The Internet Said So",
    //     category: "Comedy Podcast",
    //     year: 2018,
    //     duration: "Podcast",
    //     description: "Friends discuss funny and interesting things from the internet.",
    //     image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=600&q=80"
    // },
    {
        id: "desi-crime",
        title: "Desi Crime",
        category: "True Crime Podcast",
        year: 2020,
        duration: "Podcast",
        description: "True-crime stories from South Asia.",
        image: "https://images.cdn.kukufm.com/f:webp/https://pbcdn1.podbean.com/imglogo/image-logo/8651534/Webpnet-compress-image_1__75x0o.jpg",
         video: "https://www.youtube.com/embed/1GRuiMqFQio"
    },
    // {
    //     id: "maed-in-india",
    //     title: "Maed in India",
    //     category: "Music Podcast",
    //     year: 2015,
    //     duration: "Podcast",
    //     description: "Independent Indian musicians and their music.",
    //     image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80"
    // },
    // {
    //     id: "huberman-lab",
    //     title: "Huberman Lab",
    //     category: "Science Podcast",
    //     year: 2021,
    //     duration: "Podcast",
    //     description: "Science-based discussions about the brain and health.",
    //     image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80"
    // },
    {
        id: "ted-talks-daily",
        title: "TED Talks Daily",
        category: "Educational Podcast",
        year: 2018,
        duration: "Podcast",
        description: "Ideas and insights from speakers across different fields.",
        image: "https://yt3.googleusercontent.com/lT72em_Ys9sncn4tzR-6W6BDIKiDIYaHQuGQa7kdWR7w0rjEA1LzM1GwNmx2sVYuf2ONEVLY3g=s900-c-k-c0x00ffffff-no-rj",
        video: "https://www.youtube.com/embed/CKAyfGItpgg"
    },
    // {
    //     id: "the-mel-robbins-podcast",
    //     title: "The Mel Robbins Podcast",
    //     category: "Self-Development Podcast",
    //     year: 2022,
    //     duration: "Podcast",
    //     description: "Advice about habits, confidence and personal growth.",
    //     image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80"
    // }
];

/* REALITY SHOWS */

const realityShows = [
    {
        id: "khatron-ke-khiladi",
        title: "Khatron Ke Khiladi",
        category: "Adventure Reality",
        year: "2008",
        rating: "Adventure",
        duration: "Series",
        description: "Contestants face stunts and physical challenges.",
        image: "https://thumb.wikimedia.org/wikipedia/hi/thumb/6/6c/Khatron_Ke_Khiladi_Logo.jpg/250px-Khatron_Ke_Khiladi_Logo.jpg?utm_source=hi.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
         video: "https://www.youtube.com/embed/_PRUTMnHeJA"
    },
    {
        id: "bigg-boss",
        title: "Bigg Boss",
        category: "Indian Reality Show",
        year: "2006",
        rating: "Reality",
        duration: "Series",
        description: "Contestants live together and compete in tasks.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrg6XEiroimzMSuvIIAV2m0O_CSUVEGgEMLiNTgCO92eSz_6ys9KAzzpsLZP_ldcH4po-&s=10",
         video: "https://www.youtube.com/embed/nw5vTPczlr4"
    },
    {
        id: "indian-idol",
        title: "Indian Idol",
        category: "Singing Reality",
        year: "2004",
        rating: "Music",
        duration: "Series",
        description: "Singers compete through musical performances.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOv7MuN-oZ8PFJfui7Nn5vnPTwmGLDgtmc9fWYFre6Dk77hlM1vNy1cXFj7sFd0jzmr-L&s=10",
        video: "https://www.youtube.com/embed/nw5vTPczlr4"
    },
    {
        id: "roadies",
        title: "MTV Roadies",
        category: "Adventure Reality",
        year: "2003",
        rating: "Adventure",
        duration: "Series",
        description: "Contestants face physical tasks and team challenges.",
        image: "https://m.media-amazon.com/images/M/MV5BYzY5NmNlNTUtODE3ZC00ZmUwLThlY2EtOTA3OTE5YmI0ZmVlXkEyXkFqcGc@._V1_QL75_UX500_CR0,172,500,281_.jpg",
         video: "https://www.youtube.com/embed/HG4xFQekwGU"
    },
    {
        id: "shark-tank-india",
        title: "Shark Tank India",
        category: "Business Reality",
        year: "2021",
        rating: "Business",
        duration: "Series",
        description: "Entrepreneurs pitch business ideas to investors.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdoKBvqJeuaFF7iL726k0tfkTBSxcVvRME4OCQvUowYb17_ped1vuiLyRVCaRvwzgAp74oQ&s=10",
        video: "https://www.youtube.com/embed/IpzNTX4NpbE"
    },
    {
        id: "masterchef",
        title: "MasterChef",
        category: "Cooking Reality",
        year: "1990",
        rating: "Cooking",
        duration: "Series",
        description: "Home cooks compete in cooking challenges.",
        image: "https://yt3.googleusercontent.com/5dhLnsyTpWpnjcYlI98YtwTvCOU7w2LXrJwI9CJd-Hj3H7dOsFiNHD7U78k1EdHWcjIa4CBPiQ=s900-c-k-c0x00ffffff-no-rj",
        video: "https://www.youtube.com/embed/gu22ejRnXTg"
    },
    {
        id: "the-traitors",
        title: "The Traitors",
        category: "Mystery Reality",
        year: "2026",
        rating: "Strategy",
        duration: "Series",
        description: "Contestants use deduction to identify hidden traitors.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrrLZh5e2peFTxEjsnP_aCk_4JAm6yaG4QTMPev_y5iNITWQShErL55rWq50DBEMv_kGj95g&s=10",
        video: "https://www.youtube.com/embed/1LbBHB3Sg80"
    },
    {
        id: "the-voice",
        title: "The Voice",
        category: "Singing Reality",
        year: "2010",
        rating: "Music",
        duration: "Series",
        description: "Singers perform for coaches in a singing competition.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzGXODESpArMlntPwLC4jE6jfifCWvGsDqH7LoPjm6MDJviHuJi08GNjnZtPB1LWFj_VI3&s=10",
        video: "https://www.youtube.com/embed/qENu7NqdHEo"
    },
    {
        id: "ghost-adventures",
        title: "Ghost Adventures",
        category: "Paranormal Reality",
        year: "2008",
        rating: "Paranormal",
        duration: "Series",
        description: "A team explores reportedly haunted locations.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROnliJPjK_Myv825N0jnwtGRd_xF9YaANG0eZW5ZBQDGo4QvUJvHSBOtOGw6DMGLIN-9KI5Q&s=10",
         video: "https://www.youtube.com/embed/PRqadMuX8MQ"
    }
];

/* TRENDING */

const trendingTitles = [
    {
        id: "great-indian-kapil-show",
        title: "The Great Indian Kapil Show",
        category: "Comedy Talk Show",
        year: 2026,
        duration: "Series",
        description: "A comedy talk show with celebrity guests.",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTq1OWghvkt3qUBrN5LWitokWj8hcsdB-qM_viLsEsJSMQHyM3J",
        video: "https://www.youtube.com/embed/Dw6k07hEe8Q"
    },
    {
        id: "drishyam-3",
        title: "Drishyam 3",
        category: "Bollywood",
        year: 2026,
        duration: "Movie",
        rating: "Mystery",
        description: "A new chapter in the Drishyam franchise.",
        image: "https://cdn.district.in/movies-assets/images/cinema/_Cover%20(28)-d26fc130-ab87-11f1-8d36-519037e98333.jpg",
        video: "https://www.youtube.com/embed/BSZZwBaNQAA"
    },
    {
        id: "spider-man",
        title: "Spider-Man: Brand New Day",
        category: "Hollywood",
        year: 2026,
        duration: "Movie",
        rating: "Action",
        description: "A new adventure featuring Spider-Man.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdGm-Pm1l3WatWK2IHBqiiVfKJiO3PMnkpv_dohRah5iBXEnDxCglxi7CEjgqPXuACBbvsg&s=10",
        video: "https://www.youtube.com/embed/62bIsvRcPv0"
    },
    {
        id: "stranger-things",
        title: "Stranger Things",
        category: "Series",
        year: 2025,
        duration: "Series",
        rating: "Sci-Fi",
        description: "The mystery of Hawkins continues.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfLqWDO3ftXtuUdiRUoEV1yIn-StEcFku3r1YEZ-hMQYH9feL_q_PKsh9amKUPRSx0AhZ1A&s=10",
         video: "https://www.youtube.com/embed/PssKpzB0Ah0"
    },
    {
        id: "pritam-and-pedro",
        title: "Pritam and Pedro",
        category: "Series",
        year: 2026,
        duration: "Series",
        rating: "Crime Comedy",
        description: "An old-school cop teams up with a tech-savvy partner.",
        image: "https://resizing.flixster.com/GSdS2M-MhAhJFOpplmftbC-4Ytc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p33507139_b_v8_aa.jpg",
        video: "https://www.youtube.com/embed/uCjkRVV0-qU"
    },
    {
        id: "project-hail-mary",
        title: "Project Hail Mary",
        category: "Hollywood",
        year: 2026,
        duration: "Movie",
        rating: "Sci-Fi",
        description: "A scientist is sent on a mission to save Earth.",
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMP_KYfpWGz61nECUDVTT3O_M9mGAghvNiwssB4pGm6kwwJbqUyL-HVi9WuyOYtC0non2&s=10",
       video: "https://www.youtube.com/embed/m08TxIsFTRI"
    },
    {
        id: "obsession",
        title: "Obsession",
        category: "Hollywood",
        year: 2026,
        duration: "Movie",
        rating: "Thriller",
        description: "A wish for love turns into a dangerous obsession.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTP3x1X0NDIpVfB7OvZZ4LfVqTG2ANF0PVVYzvPIHmsFOx-CO2bbuiROkE98KxP_QEhIfQA&s=10",
        video: "https://www.youtube.com/embed/gMC8kkwbIQQ"
    },
    {
        id: "vishwanath-and-sons",
        title: "Vishwanath and Sons",
        category: "Movie",
        year: 2026,
        duration: "Movie",
        rating: "Drama",
        description: "A family drama.",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-750,h-550/et00489815-kapnrtqprq-landscape.jpg",
        video: "https://www.youtube.com/embed/95xXBEsmWLU"
    }
];
export {
  movies,
  bollywood,
  anime,
  cartoons,
  podcasts,
  realityShows,
  trendingTitles
};