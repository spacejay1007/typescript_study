import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {

    return(
        <React.Fragment>
            <h1>DoughnutChart</h1>
            <Doughnut data={"hh"}/>
        </React.Fragment>
    )
};

export default DoughnutChart;