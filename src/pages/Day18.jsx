import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'
import { Bar, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Utils = {
  months: ({ count }) => ['January', 'February', 'March', 'April', 'May', 'June', 'July'].slice(0, count),
  numbers: ({ count, min, max }) => Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min),
  CHART_COLORS: {
    red: 'rgba(255, 99, 132, 1)',
    blue: 'rgba(54, 162, 235, 1)'
  },
  transparentize: (color, opacity) => color.replace('1)', `${opacity})`)
};

const RadarChart = () => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const labels = Utils.months({ count: DATA_COUNT });
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      },
      {
        label: 'Dataset 2',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      }
    ],
  };

  // Radar Chart Configuration
  const options = {
    responsive: true,
    scales: {
      r: { // Radar charts use the 'r' scale for radial layout
        angleLines: {
          color: 'rgba(173, 172, 172, 0.5)', // Lines radiating from the center
        },
        grid: {
          color: 'rgba(128, 128, 128, 0.2)', // Circular grid line color
        },
        pointLabels: {
          color: '#FF6347', // Color of the labels around the radar
        },
        ticks: {
          display: true,
          color: 'rgba(173, 172, 172, 0.9)', // Tick marks on radar axes
        },
      },
    },
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Custom Radar Chart with Colored Grid and Labels',
      },
    },
  };

  return <Radar data={data} options={options} />;
};

const HorizontalBarChart = () => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

  const labels = Utils.months({ count: DATA_COUNT });
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      },
      {
        label: 'Dataset 2',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      },
    ],
  };

  // Configuration options
  const options = {
    indexAxis: 'y', // Horizontal bars
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: 'rgba(173, 172, 172, 0.9)',
        },
        grid: {
          color: 'rgba(173, 172, 172, 0.1)',
          borderColor: 'rgba(255, 69, 0, 0.8)',
        },
      },
      x: {
        ticks: {
          color: 'rgba(173, 172, 172, 0.9)',
        },
        grid: {
          color: 'rgba(173, 172, 172, 0.1)',
          borderColor: 'rgba(255, 69, 0, 0.8)',
        },
      },
    },
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Custom Horizontal Bar Chart with Colored Labels & Grid',
      },
    },
  };

  return <Bar data={data} options={options} />;
};


const Day18 = () => {
  useLenisScroll();
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='text-4xl text-neutral-300'>Horizontal Bar Chart Test</h1>
      <HorizontalBarChart />
      <h1 className='text-4xl text-neutral-300'>Radar Chart Test</h1>
      <RadarChart />
    </motion.div>
  )
}

export default Day18
