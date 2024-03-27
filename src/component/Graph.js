import React from 'react';
import { Doughnut } from 'react-chartjs-2'; 

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

  const options = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return <Doughnut data={graphData} options={options} />; 
};

export default Graph;
