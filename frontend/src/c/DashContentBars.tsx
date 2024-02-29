import React, { useRef } from 'react';
// declare module "https://cdnjs.cloudflare.com/ajax/libs/Char.js/2.9.4/Chart.js" {
//     export * from 'Chart'
// }
import { Bar } from 'react-chartjs-2';
// import "charts.js/auto";
import type { ChartData, ChartOptions } from 'chart.js'
interface Props {
    neo: any;
}
// interface BarProps {
//     options: any;
//     data: any;
//     datasets: any;
// }

const DashContentBars: React.FC<Props> = ({neo}) => {
    const barRef = useRef(null)
    // const xValues = neo.labels;
    // const yValues = neo.values;
    // const barChart = new Chart('NAIF-bar', {
    //     // type: "bar",
    //     data: {
    //         labels: {xValues},
    //         datasets: [{
    //             data: {yValues}
    //         }]
    //     }
    // })
    // const barChartData: BarProps = {
    //     options: null,
    //     data: neo.values,
    //     datasets: null
    // }
    const barChartData = {
        labels: neo.labels,
        datasets: [
            {
                label: 'label',
                data: neo.values,
                borderWidth: 1,
                backgroundColor: [
                    'white', 'yellow', 'green', 'red'
                ]
            }
        ]
    }
    var astbar = document.getElementById('astroide-bar')
    // var ctx = astbar.
    // var myChart = new Chart(grapharea)
    // myChart.destroy()
    // grapharea.destroy()
    return (
        <div className="dashboard-bars">
            <canvas id='astroide-bar'></canvas>
            {/* {barChartData ? <Bar
                id='astroide-bar'
                ref={barRef}
                data={barChartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: 'Noe her'
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            /> : null } */}
        </div>
    )
}

export default DashContentBars;