import React from 'react';
import { Home, UpcomingChallenge, NoPage, Draft, Day01, Day02, Day03, Day04, Day05, Day06, Day07, Day08, Day09, Day10, Day11, Day12, Day13, Day14, Day15, Day16, Day17, Day18, Day19, Day20, Day21, Day22, Day23 } from '../pages';

const existingPages = {
  Day01,
  Day02,
  Day03,
  Day04,
  Day05,
  Day06,
  Day07,
  Day08,
  Day09,
  Day10,
  Day11,
  Day12,
  Day13,
  Day14,
  Day15,
  Day16,
  Day17,
  Day18,
  Day19,
  Day20,
  Day21,
  Day22,
  Day23,
};

export const routes = [
  { path: '/', element: React.createElement(Home), index: true },
  { path: '/home', element: React.createElement(Home) },
  ...Array.from({ length: 100 }, (_, i) => {
    const dayNumber = (i + 1).toString().padStart(2, '0'); // Ensure format '01', '02', ..., '100'
    const Component = existingPages[`Day${dayNumber}`] || UpcomingChallenge; // Check if component exists
    return {
      path: `/day${dayNumber}`,
      element: React.createElement(Component),
    };
  }),
  { path: '*', element: React.createElement(NoPage) },
  { path: '/draft', element: React.createElement(Draft) },
];
