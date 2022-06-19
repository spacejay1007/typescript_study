import React, { useState } from 'react';
import './App.css';
import Chart from './charts/Chart';
import { UserData } from './charts/data';
import DoughnutChart from './charts/DoughnutChart';

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>

      <DoughnutChart />
      <div style={{width:700}}>
      <Chart chartData={userData} />
      </div>
      </div>
  );
}

export default App;
