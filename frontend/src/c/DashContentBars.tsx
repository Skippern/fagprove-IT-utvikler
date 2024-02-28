import React from 'react'
import { Bar } from 'react-chartjs-2'

interface Props {
    neo: any;
}

const DashContentBars: React.FC<Props> = ({neo}) => {
    const chartData = {
        labels: neo.labels,
        datasets: [
            {
                label: 'Values',
                data: neo.values,
                borderWidth: 1
            }
        ]
    }
    return (
        <div className="dashboard-bars">
            {/* <Bar
                // type='bar'
                data={chartData}
                // options={{
                //     scales: {
                //         // yAxes: [
                //         //     {
                //         //         ticks: {
                //         //             beginAtZero: true,
                //         //         },
                //         //     },
                //         // ],
                //     },
                // }}
            /> */}
        </div>
    )
}

export default DashContentBars;