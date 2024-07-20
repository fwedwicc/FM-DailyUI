import { fmUILogo } from '../assets';
import { day01Thumbnail, day02Thumbnail } from '../assets/thumbnails';

export const Cards = [];

const titles = [
  'Sign Up', // Day01 
  'Credit Card Checkout', // Day02
];

const descriptions = [
  'Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a volunteer event, contest registration, a giveaway, or anything you can image.', // Day01
  "Design a credit card checkout form or page. Don't forget the important elements such as the numbers, dates, security numbers, etc.", // Day02
];

const images = [
  day01Thumbnail, // Day01
  day02Thumbnail, // Day02
];

const defaultImage = fmUILogo;

for (let day = 1; day <= 100; day++) {
  const titleIndex = day - 1;
  const descIndex = day - 1;
  const imgIndex = day - 1;

  Cards.push({
    link: `/day${day.toString().padStart(2, '0')}`, // ensures day format like '/day01', '/day02', ..., '/day100'
    day: day.toString().padStart(2, '0'), // ensures day format like '01', '02', ..., '100'
    title: titles[titleIndex] || 'Not yet prompted',
    desc: descriptions[descIndex] || 'This challenge is not yet prompted',
    img: images[imgIndex] || defaultImage, // default image path
  });
}

console.log(Cards); // Check the Cards array to ensure the img property is correct
