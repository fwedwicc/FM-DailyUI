import React from 'react'
import useLenisScroll from '../hooks/useLenisScroll'
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion'
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, PointElement, LineElement, Filler, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(PointElement, LineElement, Filler, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Utils = {
  months: ({ count }) => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].slice(0, count),
  numbers: ({ count, min, max }) => Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min),
  CHART_COLORS: {
    red: 'rgba(255, 99, 132, 1)',
    blue: 'rgba(54, 162, 235, 1)'
  },
  transparentize: (color, opacity) => color.replace('1)', `${opacity})`)
};


const inputs = {
  min: -0,
  max: 50,
  count: 12,
  decimals: 2,
  continuity: 1
};

// Generate labels for the chart
const generateLabels = () => {
  return Utils.months({ count: inputs.count });
};

// Generate data for the chart
const generateData = () => {
  return Utils.numbers(inputs);
};

const LineChart = () => {
  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: 'Dataset',
        data: generateData(),
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue),
        fill: false,
        tension: 0.4, // Enable smoothing by setting tension
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      filler: {
        propagate: false,
      },
      title: {
        display: true,
        text: (ctx) => 'Smooth Line Chart (tension: 0.4)',
      }
    },
    interaction: {
      intersect: false, // Disable intersection to allow hovering without crossing
    },
  };

  return <Line data={data} options={options} />;
};

const HorizontalBarChart = () => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -50, max: 50 };

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
      {
        label: 'Dataset 3',
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
      <LineChart />
    </motion.div>
  )
}

export default Day18
