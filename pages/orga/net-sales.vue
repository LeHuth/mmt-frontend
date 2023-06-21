<template>
  <div class="max-h-[387px] h-full stats p-6 shadow rounded-none flex flex-col">
    <h1 class="">
      Recent Sells
    </h1>
    <div class="flex gap-12">
      <div>
        <p class="text-sm text-gray-500">
          This Week
        </p>
        <h4>
          90 Tickets
        </h4>
      </div>
      <div>
        <p class="text-sm text-gray-500">
          Last Week
        </p>
        <h4>
          70 Tickets
        </h4>
      </div>
    </div>
    <div class="h-full h-[387px]">
      <Line :data="chartData" :options="chartOptions" class="h-full" style="height: 100%" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const chartData = ref({
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'This Week',
    data: [12, 19, 3, 5, 2, 3, 7], // replace with your data
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  },
  {
    label: 'Previous Week',
    data: [7, 11, 5, 8, 3, 7, 2], // replace with your data
    backgroundColor: 'rgba(155,165,173,0.2)',
    borderColor: 'rgb(180,190,208)',
    borderWidth: 1
  }]
})
const chartOptions = ref({
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        drawOnChartArea: false // this will remove horizontal lines
      }
    }
  },
  maintainAspectRatio: false,
  lineTension: 0.3
})
</script>
