import React from 'react'
import { Scatter } from 'react-chartjs-2'

// interface DataPoint {
//     x: number;
//     y: number;
// }

interface Props {
    neo: any;
}

export default function DashControlScatter({neo}: Props) {
    const chartData = {
        datasets: [
            {
                // label: 'scatter',
                data: neo
            }
        ]
    }
    return(
        <div className="dashboard-scatter">
            {/* <Scatter
                id='astroid-scatter-diagram'
                // type='scatter'
                data={chartData}
                // options={{
                //     scales: {
                //         x: {
                //             // type: 'linear',
                //             position: 'bottom'
                //         },
                //         y: {
                //             // type: 'linear',
                //             position: 'left'
                //         },
                //     },
                // }} 
            /> */}
        </div>
    )
}