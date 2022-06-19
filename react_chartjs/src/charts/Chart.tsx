// import React from 'react';
import React from "react";
// import {Chart as ChartJS, registerables} from "chart.js/auto"
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const Chart = ({chartData}:any) => {
    
console.log(chartData)
    return(
            <Bar data={chartData} />
    );
}

export default Chart;




