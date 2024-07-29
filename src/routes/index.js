import React from 'react';
import { Home, Day01, Day02, Day03, Day04, Day05, Day06, Day07, Day08, Day09, Day10 } from '../pages';

export const routes = [
  { path: '/', element: React.createElement(Home), index: true },
  { path: '/home', element: React.createElement(Home) },
  { path: '/day01', element: React.createElement(Day01) },
  { path: '/day02', element: React.createElement(Day02) },
  { path: '/day03', element: React.createElement(Day03) },
  { path: '/day04', element: React.createElement(Day04) },
  { path: '/day05', element: React.createElement(Day05) },
  { path: '/day06', element: React.createElement(Day06) },
  { path: '/day07', element: React.createElement(Day07) },
  { path: '/day08', element: React.createElement(Day08) },
  { path: '/day09', element: React.createElement(Day09) },
  { path: '/day10', element: React.createElement(Day10) },
];
