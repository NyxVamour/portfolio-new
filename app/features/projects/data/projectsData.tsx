import BoardHoard from "../subpages/projects/BoardHoard";
import CommunityDB from "../subpages/projects/CommunityDB";
import EdBroadbent from "../subpages/projects/EdBroadbent";
import GooberTheOwlMonster from "../subpages/projects/GooberTheOwlMonster";
import Grocerease from "../subpages/projects/Grocerease";
import HappyHunting from "../subpages/projects/HappyHunting";
import UrbanSprouts from "../subpages/projects/UrbanSprouts";
import Yappee from "../subpages/projects/Yappee";

export type ProjectDataProps = {
    id: number;
    slug: string;
    title: string;
    componentRef: React.ComponentType;
    description: string;
    imgSrc: string;
    link: string;
    stack: string[];
    year: number;
    type: string;
    category: string;
};

export type ProjectsDataProps = ProjectDataProps[];

export const projectsData = [
    {
        id: 1,
        slug: "ed-broadbent",
        title: "Ed Broadbent Waterfront Park Pocket Guide",
        componentRef: EdBroadbent,
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
        year: 2025,
        type: "Contract & Project",
        category: "Web App",
    },
    {
        id: 2,
        slug: "urban-sprouts",
        title: "Urban Sprouts Academy",
        componentRef: UrbanSprouts,
        description:
            "A gaming hub with two educational children's games teaching about plants.",
        imgSrc: "portfolio02.png",
        link: "https://urbansproutsacademy.charlizesangabriel.ca/",
        stack: ["HTML", "CSS", "JavaScript", "GSAP", "Canvas"],
        year: 2025,
        type: "Co-op",
        category: "Game",
    },
    {
        id: 3,
        slug: "goober-the-owl-monster",
        title: "Goober the Owl Monster",
        componentRef: GooberTheOwlMonster,
        description:
            "Tamagotchi project featuring Goober, the cutest, sassiest owl monster. Voiced by me. Music and SFX from Pixabay.",
        imgSrc: "portfolio06.png",
        link: "https://goober.charlizesangabriel.ca/",
        stack: ["HTML", "CSS", "JavaScript", "GSAP"],
        year: 2024,
        type: "School Project",
        category: "Game",
    },
    {
        id: 5,
        slug: "happy-hunting",
        title: "Happy Hunting",
        componentRef: HappyHunting,
        description:
            "This is the first game I made using vanilla JavaScript. It features omnidirectional movement, a dash, and directional attacks. The game also spawns two types of enemies, a passive, and hostile mob. Art made by me. I also made music using Tone.js, and got SFX from Pixabay.",
        imgSrc: "portfolio07.png",
        link: "https://happyhunting.charlizesangabriel.ca/",
        stack: ["HTML", "CSS", "JavaScript", "GSAP", "Tone.js"],
        year: 2024,
        type: "School Project",
        category: "Game",
    },
    {
        id: 6,
        slug: "grocer-ease",
        title: "Grocer-ease",
        componentRef: Grocerease,
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
        year: 2024,
        type: "School Project",
        category: "Website",
    },
    {
        id: 7,
        slug: "board-hoard",
        title: "Board Hoard",
        componentRef: BoardHoard,
        description:
            "This is my first WordPress site built using my own custom theme. I made a nerdy website that sells board games, comics, miniatures, and other nerdy stuff galore! It also features a blog section, where you can post events, stories, and reviews.",
        imgSrc: "portfolio08.png",
        link: "https://boardhoard.charlizesangabriel.ca/ecommerce-100891054/",
        stack: ["HTML", "CSS", "WordPress", "PHP", "WooCommerce"],
        year: 2024,
        type: "School Project",
        category: "Website",
    },
    {
        id: 8,
        slug: "yappee",
        title: "Yappee!",
        componentRef: Yappee,
        description:
            "A social and drinking party game featuring different categories to talk about, act out, and more!",
        imgSrc: "portfolio05.png",
        link: "https://yappee.charlizesangabriel.ca/",
        stack: ["HTML", "CSS", "JavaScript", "Next.js"],
        year: 2024,
        type: "Project",
        category: "Game",
    },
    {
        id: 9,
        slug: "community-db",
        title: "Community Database",
        componentRef: CommunityDB,
        description:
            "A database of the hit comedy TV show “Community”. Contains information of all the episodes and cast.",
        imgSrc: "portfolio09.png",
        link: "https://communitydb.charlizesangabriel.ca/",
        stack: ["HTML", "CSS", "JavaScript", "PHP"],
        year: 2024,
        type: "School Project",
        category: "Website",
    },
];
