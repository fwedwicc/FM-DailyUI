import {
  defaultThumbnail, day01Thumbnail, day02Thumbnail, day03Thumbnail, day04Thumbnail, day05Thumbnail, day06Thumbnail, day07Thumbnail, day08Thumbnail, day09Thumbnail, day10Thumbnail, day11Thumbnail, day12Thumbnail, day13Thumbnail, day14Thumbnail, day15Thumbnail, day16Thumbnail, day17Thumbnail, day18Thumbnail, day19Thumbnail, day20Thumbnail,
} from '../assets/thumbnails';

export const Cards = [];

export const titles = [
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
  'E-commerce Shop', // Day12
  'Direct Message', // Day13
  'Countdown Timer', // Day14
  'On/Off Switch', // Day15
  'Pop-up Overlay', // Day16
  'Purchase Receipt', // Day17
  'Analytics Chart', // Day18
  'Leaderboard', // Day19
  'Location Tracker', // Day20
  'Home Monitoring Dashboard', // Day21
];

const descriptions = [
  'Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a volunteer event, contest registration, a giveaway, or anything you can image.', // Day01
  "Design a credit card checkout form or page. Don't forget the important elements such as the numbers, dates, security numbers, etc. <span class='opacity-0'> Lorem ipsum dolor sit amet consectetur adipisicing</span>", // Day02
  "What's the main focus? Is it for a book, an album, a mobile app, a SaaS product? Consider important landing page elements (Headlines, call-to-action buttons, typography, clarity, etc.)", // Day03
  "Design a calculation element or interface. Is it a standard calculator, a scientific one, or specialty calculator for something such as a home mortgage or auto loan? Is it to forecast a calculation such as for a credit score? Is it for a phone, a tablet, a web app?", // Day04
  "Design an app icon. What best represents the brand or product? Or is it incredibly unique? Does it look great at a distance and does it stand out when put on your home screen alongside other apps?", // Day05
  "Design a user profile and be mindful of the most important data, names, imagery, placement, etc. Is it for a serious profile? A social profile? (It's up to you!) <span class='opacity-0'> Lorem ipsum dolor sit amet consectetur.</span>", // Day06
  "Design settings for something. Is it for security or privacy settings? Game settings? Light mode vs. dark mode? System settings (sound, notifications, screen time, Wi-Fi, etc.? What is it and what are the most important settings?", // Day07
  "Design a 404 page - that's not boring! Does it suit the brand's style? Is it user-friendly? It might sound mundane, but not everything can be flashy or glamorous. Every day millions of people will be landing on 404 pages. You have an opportunity to help them in a way that's useful and aesthetically pleasing. (It's up to you!)", // Day08
  "Design a music player. It could be browser based or an app (i.e. Pandora, Spotify, SoundCloud, etc.) or in a standalone product like in a car dashboard, jukebox, etc. Consider the controls, placements, imagery such as the artist or album cover, etc. Also, consider the device type that's playing the music.", // Day09
  "Design a social share button/icon and be mindful of the size, imagery, placement, and purpose for sharing. It could be to share an article snippet, or a simple link with a photo.", // Day10
  "Design a Flash Message with both the error message and success message. Is it for a sign up form? A download/upload message? Is it to promote a membership plan?", // Day11
  "Design an e-commerce shop. Is it simple for a local business or a large online retailer? Is it for clothing, shoes, handmade soap, or something else? <span class='opacity-0'> Lorem ipsum dolor sit amet consectetur adipisicing</span>", // Day12
  "Design a Direct Messaging app, profile, or chat box. Consider the parties involved in the messages, images, placement, and context of the messages. Are the messages for social purposes? Customer support?", // Day13
  "Is it for an app? An interface for an oven or cooking device? A sport related countdown such as on a scoreboard? Or is it a launch countdown for NASA, race cars, or something else?", // Day14
  "Consider what's being turned on/off and how it should be done. Is it a push-to-start electric vehicle? A control panel for a smart refrigerator or some other touch-panel display?", // Day15
  "Is it for a newsletter sign-up form ? Is it an ad overlay? A gated subscription page such as for premium news or member-only access?<span class='opacity-0'> Lorem ipsum dolor sit amet consectetur adipisicing</span>", // Day16
  "What was purchased? On what date? How much was the item? And from what source and vendor? Consider other elements such as a customer support info, a tracking number or receipt number, business location/phone number/website, pictures if needed, and any other related elements.", // Day17
  "Is it to be used for web or app usage, a health monitor, e-commerce or traffic analytics? Is it tracking sports or stock market performance? <span class='opacity-0'> Lorem ipsum dolor sit amet consectetur adipisicing</span>", // Day18
  "Is it for gaming, sports, racing, politics, top sellers, the highest grossing movies, or something else? Consider the important statistics to show, percentages, points, avatar pictures or logos, and the most critical elements.", // Day19
  "Consider the icon, placement, and purpose of the location. Are you mapping something? Is it a tracking beacon to find a friend or a tracking device such as a phone? Is the NSA or FBI tracking you?", // Day20
  "Design a home monitoring dashboard. Be creative! What would make a dashboard visually appealing and fun to use, while also being mindful of its function? Try to make it a realistic exercise as if it were your own dashboard.", // Day21
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
  day11Thumbnail, // Day11
  day12Thumbnail, // Day12
  day13Thumbnail, // Day13
  day14Thumbnail, // Day14
  day15Thumbnail, // Day15
  day16Thumbnail, // Day16
  day17Thumbnail, // Day17
  day18Thumbnail, // Day18
  day19Thumbnail, // Day19
  day20Thumbnail, // Day20
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

