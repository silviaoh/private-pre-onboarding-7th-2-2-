const OPTIONS = {
  spanGaps: true,
  maxBarThickness: 30,
  grouped: true,
  responsive: true,
  elements: {
    point: { radius: 0 },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(48, 48, 48, 0.8)',
      padding: 10,
      usePointStyle: true,
    },
  },
  stacked: false,
  scales: {
    x: {
      grid: {
        display: false,
        drawTicks: true,
        tickLength: 4,
        color: '#E2E2E230',
      },
    },
    yWon: {
      type: 'linear',
      grid: {
        color: '#E2E2E230',
      },
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

export { OPTIONS };
