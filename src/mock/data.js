import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zawie', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Adam Zawierucha',
  subtitle: ' ',
  cta: 'More',
};

// ABOUT DATA
export const aboutData = {
  img: 'face.jpg',
  paragraphOne: 'I am a computer science student at Rice University.',
  paragraphTwo:
    'Ever since I firsted started video-games as kid, I have been hooked to programming. I have branched off in to developing apps, websites, and even deep learning research. I am turning my hobby for programming and computer science into a full fledged career.',
  paragraphThree: 'I am currently looking for an internship or research position for Summer 2021.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'divorce_ds.png',
    title: 'Divorce Data Science',
    info: 'Rice Datathon 2020 - Best Underclassmen Team',
    info2:
      'Using SVM Algorithms to Optimize Divorce Prediction Scales. We found the most predictive question in determing whether or not a married couple would divorce was "Do you know your spouse\'s hopes and wishes?"',
    url: 'http://zawie.zone/divorce-data-science/',
    repo: 'https://github.com/zawie/divorce-data-science',
  },
  {
    id: nanoid(),
    img: 'boids.png',
    title: 'Flocking Boids',
    info:
      '"Boids is an artificial life program, developed by Craig Reynolds in 1986, which simulates the flocking behaviour of birds." (Wikipedia)',
    info2:
      'I implemented these 2D boids in the browser. Check out how the boids school like real fish.',
    url: 'http://zawie.github.io/flock/',
    repo: 'https://github.com/zawie/flock',
  },
  {
    id: nanoid(),
    img: 'moody.png',
    title: 'Public Art Installation Navigator ',
    info:
      'On RiceApps, I worked on a team of 6 to develop an app for the Moody Center for the Arts.',
    info2: '',
    url: '',
    repo: 'https://github.com/rice-apps/moody',
  },
  {
    id: nanoid(),
    img: 'match.png',
    title: 'Match',
    info: 'Team Lead on RiceApps',
    info2:
      'Working to develop a website to help two different stake holders with similiar tasks: Covidsitters match healthcare workers with student volunteer babysitters and the Rice Center for Career Development match students with externships.',
    url: 'https://www.match.riceapps.org',
    repo: 'https://github.com/rice-apps/match',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Tentabs',
    info: 'A HackRice 9 Project',
    info2:
      'Are you tired of having to open and close each result after you Google something, wasting precious time you could be using on producitivity?\n\nThen Tentabs is for you! Tentabs is a chrome extension that will open the first results of a Google search in indiviual tabs to enhance your browsing experience.',
    url: 'https://devpost.com/software/tentabs',
    repo: 'https://github.com/zawie/tentabs',
  },
  {
    id: nanoid(),
    img: 'minigame_mania.jpeg',
    title: 'Minigame Mania',
    info: 'A multiplayer roblox game with over 770,000 plays.',
    info2: '',
    url: 'https://www.roblox.com/games/978797212/Minigame-Mania',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'possession.jpeg',
    title: 'Possession II',
    info: 'A multiplayer roblox game with over 375,500 plays.',
    info2: '',
    url: 'https://www.roblox.com/games/325062044/Possession-II-Spooked',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: "Let's Talk",
  email: 'zawie@rice.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /* {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zawie/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/zawie',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
