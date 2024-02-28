import React from 'react'
import { Scatter } from 'react-chartjs-2'

// interface DataPoint {
//     x: number;
//     y: number;
// }

interface Props {
    data: any;
}

export default function DashControlScatter({data}: Props) {
    const myData: any = [
        {x: 1, y: 3 }
    ]
    const chartData = {
        datasets: [
            {
                label: 'scatter',
                data: myData
            }
        ]
    }
    return(
        <div className="dashboard-scatter">
            <Scatter
                id='astroid-scatter-diagram'
                // type='scatter'
                data={chartData}
                options={{
                    scales: {
                        x: {
                            // type: 'linear',
                            position: 'bottom'
                        },
                        y: {
                            // type: 'linear',
                            position: 'left'
                        },
                    },
                }} 
            />
        </div>
    )
}