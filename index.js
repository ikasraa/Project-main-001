const ctx = document.getElementById('myChart');

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const data = {
  labels: labels,
  datasets: [
    {
      axis: 'y',
      label: 'Series A',
      data: [95, 140, 100, 81, 86, 55, 40, 30, 25, 45, 60, 72],
      fill: false,
      backgroundColor: [
        '#2977ff'
      ],
      borderColor: [
        '#2977ff'
      ],
      borderWidth: 1
    },
    {
      axis: 'y',
      label: 'Series B',
      data: [45, 80, 40, 81, 56, 55, 40, 30, 25, 45, 60, 72],
      fill: false,
      backgroundColor: [
        '#f1b44c'
      ],
      borderColor: [
        '#f1b44c'
      ],
      borderWidth: 1
    },
    {
      axis: 'y',
      label: 'Series C',
      data: [35, 39, 60, 81, 56, 55, 40, 30, 25, 45, 60, 72],
      fill: false,
      backgroundColor: [
        '#2ecc71'
      ],
      borderColor: [
        '#2ecc71'
      ],
      borderWidth: 1
    },
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked'
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
};

new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        // text: 'Chart.js Bar Chart - Stacked'
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
}); 