import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';   // ✅ REQUIRED
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ChartDataLabels);   // ✅ plugin registered

const Topic = ({ langList, langNumList }) => {
  const data = {
    labels: langList,
    datasets: [
      {
        data: langNumList,
        backgroundColor: 'black',
        borderRadius: 6,
        barThickness: 45,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
      legend: {
      display: false  
    },
      title: {
        display: true,
        text: 'Languages'
      },

      animation: {
        duration: 1200,
        easing: 'easeOutQuart'
      },

      // ✅ yahin hona chahiye
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#000',
        font: {
          weight: 'bold',
          size: 14
        },
        formatter: (value) => value
      }
    },

    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { display: true }
      },
      y: {
        grid: { display: false },
        border: { display: false },
        ticks: { display: false }   // axis numbers off
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default Topic;
