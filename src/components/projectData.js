// projectData.js

const portfolioData = {
    title: "Portfolio",
    image: "./assets/projects/portfolio.png",
    langage: 'TypeScript/NextJS',
    finished: true,
    teamSize: 1,
    description: "Ce projet a été réalisé dans le but de démontrer mes compétences aux recruteurs dans le cadre de la recherche d'un stage.\n\n J'ai pris en charge l'intégralité du site, que ce soit le design ou la partie back-end.",
    githubLink: "https://github.com/Hitow0/portfolio",
};

const readnLiveData = {
    title: "Read'nLive",
    image: "./assets/projects/Read'nLive.png",
    langage: 'PHP/Laravel',
    finished: true,
    teamSize: 8,
    description: "Read'nLive est un projet conçu lors du marathon du web, en collaboration avec le département MMI (Métiers du Multimédia et de l'Internet), dans un délai imparti de 36 heures. Ce site web permet la lecture, l'édition et la création d'histoires à choix.\n" +
        "\n" +
        "Pour ce projet, l'équipe informatique a pris en charge la partie back-end, tandis que j'ai particulièrement travaillé sur l'amélioration du confort utilisateur. Cela inclut la possibilité pour l'utilisateur d'accéder à son profil, de consulter ses histoires, et de les éditer ou supprimer selon ses préférences.",
    githubLink: "https://github.com/Hitow0/readnlive",
};


const flatcraftData = {
    title: "Flatcraft",
    image: "./assets/projects/Flatcraft.png",
    langage: 'Java',
    finished: true,
    teamSize: 4,
    description: "Flatcraft est une version en 2D de Minecraft, entièrement développée en Java. Les joueurs ont la possibilité de miner des blocs, de récolter des ressources, de se déplacer, et de fabriquer des outils ou de nouveaux blocs. Un système de dimensions est également disponible." +
        "\n\n" +
    "Les tâches ont été réparties équitablement, et j'ai été responsable du cassage des blocs et de la fabrication. Ce projet a permis l'apprentissage de différents types de patrons de conception.",
    githubLink: "https://github.com/Hitow0/flatcraft",
};

const raytracerData = {
    title: "RayTracer",
    image: "./assets/projects/Raytracer.png",
    langage: 'Java',
    finished: true,
    teamSize: 4,
    description: "Le but de ce projet était de créer une librairie capable de lire un fichier de configuration et de générer une image. L'élaboration de cette image implique des calculs complexes de lumière, se concentrant spécifiquement sur l'application des principes du raytracing. Cette technique de rendu simule le trajet des rayons de lumière à travers une scène virtuelle, permettant d'obtenir des images réalistes en reproduisant fidèlement les effets de lumière et d'ombre." +
     "\n\n" +
    "Au cours de ce projet, j'ai assumé la responsabilité de plusieurs aspects du développement, notamment la mise en œuvre de certains calculs de lumière (notamment l'illumination de Phong) et la gestion de la lecture du fichier de configuration. De plus, j'ai effectué de nombreuses sessions de débogage pour garantir le bon fonctionnement de la librairie.",
    githubLink: "https://github.com/Hitow0/raytracer",
};
const webpokeData = {
    title: "WebPoke",
    image: "./assets/projects/Webpoke.png",
    langage: 'Python / Flask',
    finished: true,
    teamSize: 4,
    description: "Ce projet avait pour objectif d'apprendre à utiliser les API avec le framework Flask. Le principe est de faire des recherches sur des pokemons et d'afficher les informations. \n \n Nous avons pris soin à rajouter des détails supplémentaires pour faciliter la compréhension utilisateur et de rajouter un jeu nommé 'Quel est ce Pokemon?' afin de donner un jeu ayant un rapport avec le Pokedex : capturer tous les pokemons.",
    githubLink: "https://github.com/Hitow0/webpoke",
};


const projects = [
    { projectKey: "webpoke", ...webpokeData },
    { projectKey: "portfolio", ...portfolioData },
    { projectKey: "readnLive", ...readnLiveData },
    { projectKey: "flatcraft", ...flatcraftData },
    { projectKey: "raytracer", ...raytracerData },
];

export { projects };
