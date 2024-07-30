import {
  defaultThumbnail, day01Thumbnail, day02Thumbnail, day03Thumbnail, day04Thumbnail, day05Thumbnail, day06Thumbnail, day07Thumbnail, day08Thumbnail, day09Thumbnail, day10Thumbnail,
} from '../assets/thumbnails';

export const Cards = [];

const titles = [
  'Sign Up', // Day01 
  'Credit Card Checkout', // Day02
  'Landing Page', // Day03
  'Calculation', // Day04
  'App Icon', // Day05
  'User Profile', // Day06
  'Settings', // Day07
  '404 Page Design', // Day08
  'Music Player', // Day09
  'Social Share', // Day10
  'Flash Message', // Day11
];

const descriptions = [
  'Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a volunteer event, contest registration, a giveaway, or anything you can image.', // Day01
  "Design a credit card checkout form or page. Don't forget the important elements such as the numbers, dates, security numbers, etc.", // Day02
  "What's the main focus? Is it for a book, an album, a mobile app, a SaaS product? Consider important landing page elements (Headlines, call-to-action buttons, typography, clarity, etc.)", // Day03
  "Design a calculation element or interface. Is it a standard calculator, a scientific one, or specialty calculator for something such as a home mortgage or auto loan? Is it to forecast a calculation such as for a credit score? Is it for a phone, a tablet, a web app?", // Day04
  "Design an app icon. What best represents the brand or product? Or is it incredibly unique? Does it look great at a distance and does it stand out when put on your home screen alongside other apps?", // Day05
  "Design a user profile and be mindful of the most important data, names, imagery, placement, etc. Is it for a serious profile? A social profile? (It's up to you!)", // Day06
  "Design settings for something. Is it for security or privacy settings? Game settings? Light mode vs. dark mode? System settings (sound, notifications, screen time, Wi-Fi, etc.? What is it and what are the most important settings?", // Day07
  "Design a 404 page - that's not boring! Does it suit the brand's style? Is it user-friendly? It might sound mundane, but not everything can be flashy or glamorous. Every day millions of people will be landing on 404 pages. You have an opportunity to help them in a way that's useful and aesthetically pleasing. (It's up to you!)", // Day08
  "Design a music player. It could be browser based or an app (i.e. Pandora, Spotify, SoundCloud, etc.) or in a standalone product like in a car dashboard, jukebox, etc. Consider the controls, placements, imagery such as the artist or album cover, etc. Also, consider the device type that's playing the music.", // Day09
  "Design a social share button/icon and be mindful of the size, imagery, placement, and purpose for sharing. It could be to share an article snippet, or a simple link with a photo.", // Day10
  "Design a Flash Message with both the error message and success message. Is it for a sign up form? A download/upload message? Is it to promote a membership plan? ", // Day11
];

const images = [
  day01Thumbnail, // Day01
  day02Thumbnail, // Day02
  day03Thumbnail, // Day03
  day04Thumbnail, // Day04
  day05Thumbnail, // Day05
  day06Thumbnail, // Day06
  day07Thumbnail, // Day07
  day08Thumbnail, // Day08
  day09Thumbnail, // Day09
  day10Thumbnail, // Day10
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

