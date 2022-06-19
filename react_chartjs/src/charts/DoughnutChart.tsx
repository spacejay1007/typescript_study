import React from 'react';
import { Doughnut } from 'react-chartjs-2';

type T_datasProps ={
    labels: string[];
    datasets : object|object[]| number[]|string[] | any

    // dataassets : any;
}



const DoughnutChart = () => {
    const labels = ["Red", "Blue", "Yellow", "Green" , "Purple"];

    const data:T_datasProps = {
           
        labels : labels, // 상단에 있는 표기 라벨
        datasets : [{
            type : "line",
            label:"My first dataset",
            data : [12, 19, 3, 5, 2, 3],
            
        }]
    }
    return(
        // <React.Fragment>
        <div>

            <h1>DoughnutChart</h1>
            <Doughnut  data={data}/>
            
        </div>
        // </React.Fragment>
    )
};

export default DoughnutChart;