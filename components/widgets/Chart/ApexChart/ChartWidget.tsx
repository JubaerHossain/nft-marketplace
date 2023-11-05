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
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
        labels: {
            usePointStyle: true ,//for style circle,
            color : "red"
          }
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };
  export const data = {
    labels,
    datasets: [
      {
        label: 'Average',
        data: [1,2,3,4,5,12],
        borderColor: '#46D4FF',
        backgroundColor: '#46D4FF',
        borderWidth: 6,
        tension: .3
      },
      {
        label: 'Earning',
        data: [1,21,13,24,15],
        borderColor: '#FF9900',
        backgroundColor: '#FF9900',
        borderWidth: 6,
        tension: .3
      },
      
    ],
  };
const ChartWidget = () => {
    return <Line  options={options} data={data} />;
};

export default ChartWidget;


