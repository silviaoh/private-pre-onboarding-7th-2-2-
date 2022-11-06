import React, { useEffect, useState, useRef } from 'react';
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
import { graphOptionsAtom, graphSelector } from '../../recoil/dashboard';
import { getWillChangeDatasetIdx } from '../../utils/get';

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
  const chartRef = useRef(null);
  const selectedOptions = useRecoilValue(graphOptionsAtom);
  const graphData = useRecoilValue(graphSelector);
  const chartData = {
    labels: graphData.labels,
    datasets: [
      //roas
      {
        id: 'roas',
        data: graphData.roas,
        borderColor: '#4FADF7',
        yAxisID: 'yPercent',
        hidden: false,
      },
      {
        id: 'cost',
        data: graphData.cost,
        borderColor: '#a84232',
        yAxisID: 'yWon',
        hidden: false,
      },
      {
        id: 'imp',
        data: graphData.imp,
        borderColor: '#ebe773',
        yAxisID: 'yWon',
        hidden: true,
      },
      {
        id: 'click',
        data: graphData.click,
        borderColor: '#85DA47',
        yAxisID: 'yWon',
        hidden: true,
      },
      {
        id: 'cvr',
        data: graphData.cvr,
        borderColor: '#73ebbf',
        yAxisID: 'yWon',
        hidden: true,
      },
      {
        id: 'convValue',
        data: graphData.convValue,
        borderColor: '#8b73eb',
        yAxisID: 'yWon',
        hidden: true,
      },
      //클릭수
    ],
  };

  const OPTIONS = {
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

  const updateAllHide = (chart, value) => {
    chart.data.datasets.forEach((_, index) => {
      chart.hide(index);
    });
  };

  useEffect(() => {
    const chart = chartRef?.current;
    updateAllHide(chart);
    const index0 = chart.data.datasets.findIndex(
      dataset => dataset.id === selectedOptions[0]
    );
    const index1 = chart.data.datasets.findIndex(
      dataset => dataset.id === selectedOptions[1]
    );

    chart.show(index0);

    if (selectedOptions[1]) {
      chart.show(index1);
    }
    chart.update();
  }, [selectedOptions[0], selectedOptions[1]]);

  return <Line ref={chartRef} options={OPTIONS} data={chartData} />;
};

export default LineChart;
