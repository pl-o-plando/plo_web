import React from 'react';
import { Doughnut } from 'react-chartjs-2'; 
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const Graph = ({ data }) => {
  const graphData = {
    labels: ['Done', 'In Progress', 'Todo'],
    datasets: [
      {
        label: '# of Votes',
        data: data,
        backgroundColor: [
          '#FF6A6A',
          '#008FDF',
          '#FFB931',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={graphData} />; 
};

export default Graph;
