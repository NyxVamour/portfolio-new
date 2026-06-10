export type projectsDataProps = {
    id: number;
    title: string;
    url: string;
    description: string;
    imgSrc: string;
    link: string;
    stack: string[];
    category: string;
}[];

export const projectsData = [
    {
        id: 1,
        title: "Ed Broadbent Waterfront Park Pocket Guide",
        url: "ed_broadbent_park_pocket_guide",
        description:
            "Working with TeachingCity Oshawa, we made an interactive map of the Ed Broadbent Waterfront Park in Oshawa. Features different points of interest and information about them.",
        imgSrc: "portfolio01.png",
        link: "https://dccityprojects.github.io/Ed-Broadbent-Waterfront-Park/",
        stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Leaflet",
            "Photo Sphere Viewer",
            "GSAP",
        ],
        category: "Web App",
    },
    {
        id: 2,
        title: "Urban Sprouts Academy",
        url: "urban_sprouts_academy",
        description:
            "A gaming hub with two educational children's games teaching about plants.",
        imgSrc: "portfolio02.png",
        link: "https://urbansproutsacademy.charlizesangabriel.ca/",
        stack: ["HTML", "CSS", "JavaScript", "GSAP", "Canvas"],
        category: "Game",
    },
    {
        id: 3,
        title: "Goober the Owl Monster",
        url: "goober_the_owl_monster",
        description:
            "Tamagotchi project featuring Goober, the cutest, sassiest owl monster. Voiced by me. Music and SFX from Pixabay.",
        imgSrc: "portfolio06.png",
        link: "https://goober.charlizesangabriel.ca/",
        stack: ["HTML", "CSS", "JavaScript", "GSAP"],
        category: "Game",
    },
    {
        id: 5,
        title: "Happy Hunting",
        url: "happy_hunting",
        description:
            "This is the first game I made using vanilla JavaScript. It features omnidirectional movement, a dash, and directional attacks. The game also spawns two types of enemies, a passive, and hostile mob. Art made by me. I also made music using Tone.js, and got SFX from Pixabay.",
        imgSrc: "portfolio07.png",
        link: "https://happyhunting.charlizesangabriel.ca/",
        stack: ["HTML", "CSS", "JavaScript", "GSAP", "Tone.js"],
        category: "Game",
    },
    {
        id: 6,
        title: "Grocer-ease",
        url: "grocer-ease",
        description:
            "This is my grocery website project. We were tasked with making a grocery website. It pulls the info from a database and displays it. This also features searching and an add to cart functionality.",
        imgSrc: "portfolio04.png",
        link: "https://grocer-ease.charlizesangabriel.ca/",
        stack: [
            "HTML",
            "CSS",
            "Javascript",
            "PHP",
            "Jquery",
            "MySQL",
            "Foundation.js",
        ],
        category: "Website",
    },
    {
        id: 7,
        title: "Board Hoard",
        url: "board_hoard",
        description:
            "This is my first WordPress site built using my own custom theme. I made a nerdy website that sells board games, comics, miniatures, and other nerdy stuff galore! It also features a blog section, where you can post events, stories, and reviews.",
        imgSrc: "portfolio08.png",
        link: "https://boardhoard.charlizesangabriel.ca/ecommerce-100891054/",
        stack: ["HTML", "CSS", "WordPress", "PHP", "WooCommerce"],
        category: "Website",
    },
    {
        id: 8,
        title: "Yappee!",
        url: "yappee",
        description:
            "A social and drinking party game featuring different categories to talk about, act out, and more!",
        imgSrc: "portfolio05.png",
        link: "https://yappee.charlizesangabriel.ca/",
        stack: ["HTML", "CSS", "JavaScript", "Next.js"],
        category: "Game",
    },
    {
        id: 9,
        title: "Community Database",
        url: "community_db",
        description:
            "A database of the hit comedy TV show “Community”. Contains information of all the episodes and cast.",
        imgSrc: "portfolio09.png",
        link: "https://communitydb.charlizesangabriel.ca/",
        stack: ["HTML", "CSS", "JavaScript", "PHP"],
        category: "Website",
    },
];
