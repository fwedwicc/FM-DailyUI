import {
  defaultThumbnail, day01Thumbnail, day02Thumbnail, day03Thumbnail, day04Thumbnail, day05Thumbnail,
} from '../assets/thumbnails';

export const Cards = [];

const titles = [
  'Sign Up', // Day01 
  'Credit Card Checkout', // Day02
  'Landing Page', // Day03
  'Calculation', // Day04
  'App Icon', // Day05
];

const descriptions = [
  'Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a volunteer event, contest registration, a giveaway, or anything you can image.', // Day01
  "Design a credit card checkout form or page. Don't forget the important elements such as the numbers, dates, security numbers, etc.", // Day02
  "What's the main focus? Is it for a book, an album, a mobile app, a SaaS product? Consider important landing page elements (Headlines, call-to-action buttons, typography, clarity, etc.)", // Day03
  "Design a calculation element or interface. Is it a standard calculator, a scientific one, or specialty calculator for something such as a home mortgage or auto loan? Is it to forecast a calculation such as for a credit score? Is it for a phone, a tablet, a web app?", // Day04
  "Design an app icon. What best represents the brand or product? Or is it incredibly unique? Does it look great at a distance and does it stand out when put on your home screen alongside other apps?" // Day05
];

const images = [
  day01Thumbnail, // Day01
  day02Thumbnail, // Day02
  day03Thumbnail, // Day03
  day04Thumbnail, // Day04
  day05Thumbnail, // Day05
];

const defaultImage = defaultThumbnail;

for (let day = 1; day <= 100; day++) {
  const titleIndex = day - 1;
  const descIndex = day - 1;
  const imgIndex = day - 1;

  Cards.push({
    link: `/day${day.toString().padStart(2, '0')}`, // ensures day format like '/day01', '/day02', ..., '/day100'
    day: day.toString().padStart(2, '0'), // ensures day format like '01', '02', ..., '100'
    title: titles[titleIndex] || 'Upcoming Challenge',
    desc: descriptions[descIndex] ? `Prompt: ${descriptions[descIndex]}` : 'This challenge has not yet been revealed. Stay tuned for updates!',
    img: images[imgIndex] || defaultImage, // default image path
  });
}

