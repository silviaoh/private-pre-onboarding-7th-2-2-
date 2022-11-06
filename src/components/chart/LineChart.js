import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useRecoilValue } from 'recoil';
import { graphSelector } from '../../recoil/dashboard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const graphData = useRecoilValue(graphSelector);

  const options = {
    responsive: true,
    elements: {
      point: { radius: 0 },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {},
    },
    stacked: false,
    scales: {
      x: { grid: { display: false } },
      yWon: {
        type: 'linear',
        display: true,
        position: 'left',
        grid: { border: 'none' },
      },
      yPercent: {
        type: 'linear',
        display: true,
        position: 'right',
      },
    },
  };

  const data = {
    labels: graphData.labels,
    datasets: [
      //roas
      {
        data: graphData.imp,
        borderColor: '#4FADF7',
        yAxisID: 'yWon',
      },
      //클릭수
      {
        data: graphData.cost,
        borderColor: '#85DA47',
        yAxisID: 'yWon',
      },
      {
        data: graphData.roas,
        borderColor: '#eef342',
        yAxisID: 'yPercent',
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
