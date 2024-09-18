"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  console.log(accounts);
  const accountNames = accounts.map((a) => a.name);
  const balances = accounts.map((a) => a.currentBalance)

  if (!accounts || accounts.length === 0) {
    return <p>No account data available</p>;
  }

  const data = {
    datasets: [
      {
        label: 'Banks',
        data: balances,
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] 
      }
    ],
    labels: accountNames
  }

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Doughnut 
        data={data} 
        options={{
          cutout: '60%',
          plugins: {
            legend: { display: false },
          },
        }}
      />
    </div>
  );
}

export default DoughnutChart