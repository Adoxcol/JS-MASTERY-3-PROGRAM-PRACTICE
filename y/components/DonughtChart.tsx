
"use client";
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);




const DonughtChart = ({accounts}: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label :'Banks',
        data: [1250,2500,3750,5000],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: ['Brac Bank','Uttara Bank','City Bank','Islamic Bank']
  }
  return <Doughnut data={data}
  options={{
    cutout: '60%',
    plugins: {
      legend: {
        display: false
      }
    }
  }}
  /> 
  
}

export default DonughtChart