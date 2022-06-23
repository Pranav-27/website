import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Pranav Rana', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Pranav',
  subtitle: "I'm a Junior Developer and Tutor",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_enhanced.jpg',
  paragraphOne: "I'm currently studying Computer Science at Rensselaer Polytechnic Institute. I aspire to be a lead developer at a company one day.",
  paragraphTwo: "I specialize in mobile app development with Flutter and Firebase, and have a good understanding of Java and Python.",
  paragraphThree: "When I'm not studying or working, I enjoy lifting, reading, and playing chess.",
  resume: 'https://docs.google.com/document/d/1J96dH8ZDKGBFC3_zaXeFK8rCwxZSHth3RWlvF-bAx44/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'explorenj_screenshot.jpg',
    title: 'Explore NJ',
    info: 'This app provides users with a list of top 10 locations in New Jersey. Some key features include images(scraped from google), placeholder reviews, like button, search option, and top search results.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=jJpUQbNtsFI&t=1s',
    repo: 'https://github.com/Pranav-27/explore-nj', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'food_app_screenshot.jpg',
    title: 'Restaurant Template',
    info: "This app displays a restaurant’s menu from google sheets in a visually appealing and formatted list. It also allows for sign in and sign up using firebase for user authentication.",
    info2: 'Users have the option to add varying quantities of each food/drink to the chart.',
    url: 'https://youtube.com/shorts/vcpqrFR6rzE?feature=share',
    repo: 'https://github.com/Pranav-27/restaurant', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'reach.pranavrana@gmail.com     732-351-6257',
  email: 'reach.pranavrana@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@pranav-rana',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pranav-rana-19019421a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Pranav-27',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
