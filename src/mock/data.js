import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Soraida Henne | Design & Development', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Soraida',
  subtitle: `I'm a Designer and Web Developer.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profileWEB.jpg',
  paragraphOne:'Soraida is a web developer and multimedia artist based out of Minneapolis, Minnesota who integrates a love for illustration with ever-changing technologies.',
  paragraphTwo:'She is a graduate of Minneapolis College of Art and Design with a BFA in Web and Multimedia Environments. She recently attended Le Wagon Tokyo, a 9-week intensive coding bootcamp to learn HTML, CSS, Bootstrap, JavaScript ES2015, SQL, git, GitHub, Heroku and Ruby on Rails.',
  paragraphThree:'In her spare time, Soraida likes to sing karaoke, eat good food, and see the world through her thick glasses.',
  resume: 'https://drive.google.com/file/d/1hwRWmLWpCoK-0gQc0ACaXWp042hibssz/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cc-banner.png',
    title: 'CleverCloset',
    info: `A mobile application dedicated to reducing one's impact on the environment by managing the clothes the user may already own, and encouraging the user to donate to charity shops or share their clothing items among friends. This project was developed in two weeks in a team of four. I handled front-end development and the UI/UX.`,
    info2: '',
    url: '',
    repo: 'https://github.com/sodapoph/clever_closet', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'obiLanding.png',
    title: 'OBI',
    info: 'An online marketplace for traditional Japanese garment rentals. Developed as a one-week "Airbnb-style" project. I handled the front-end web development and UX/UI in my team of four.',
    info2: '',
    url: 'https://obi363.herokuapp.com/',
    repo: 'https://github.com/sodapoph/obi', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chicken-cover.png',
    title: 'Chicken Coop',
    info: 'Mock-ups for a mobile app pitch. Chicken Coop is an app that helps users find local farms and agriculture hobbyists who sell eggs, dairy, and honey.',
    info2: 'Created with Figma',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cover-img2.png',
    title: 'Sprout UI Mock-ups',
    info: 'Mock-ups for a mobile app pitch. Sprout is an app that helps users manage their house plants. Users can log every plant they own, set watering alarms, and connect with local plant enthusiasts to share tips and tricks.',
    info2: 'Created with Figma',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me',
  email: 'soraidahenne@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/soraidahenne/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sodapoph',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
