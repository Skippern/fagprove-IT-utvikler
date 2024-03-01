import React, { useState, useEffect } from 'react'
import DashContentFilter from './DashContentFilter';
import DashContentTable from './DashContentTable';
import DashContentBars from './DashContentBars';
import DashControlScatter from './DashContentScatter';

interface Props {
    neo: any;
}
export default function DashContent({neo}: Props) {
    const [filterSize, setFilterSize] = useState<string>('alle')
    const [filterMinSpeed, setFilterMinSpeed] = useState<number>(0)
    const [filterMaxSpeed, setFilterMaxSpeed] = useState<number>(100)
    const [filterDangerous, setFilterDangerous] = useState<string>('alle')
    const [filterRange, setFilterRange] = useState<number>(100000)
    const [neoFiltered, setNeoFiltered] = useState<any>(neo)
    const [barData, setBarData] = useState<any>()
    const [scatterData, setScatterData] = useState<any|null>()

    function updateFilter() {
        let newFilter: any[] = []
        Object.keys(neo).forEach((key) => {
            const element = neo[key]
            let sizeSort: boolean = true
            let dangerSort: boolean = true
            if (filterDangerous === 'ja') {
                dangerSort = element['potentiallyHazardous']
            } else if (filterDangerous === 'nei') {
                dangerSort = !element['potentiallyHazardous']
            }
            if (filterSize === 'vs') {
                if (element['diameter'] > 10) {
                    sizeSort = false
                }
            } else if (filterSize === 's') {
                if (element['diameter'] < 10 || element['diameter'] > 100) {
                    sizeSort = false
                }
            } else if (filterSize === 'm') {
                if (element['diameter'] < 100 || element['diameter'] > 1000) {
                    sizeSort = false
                }
            } else if (filterSize === 'L') {
                if (element['diameter'] < 1000) {
                    sizeSort = false
                }
            }
            if (element['velocity'] > filterMinSpeed &&
                    element['velocity'] < filterMaxSpeed &&
                    element['closestDistance'] < filterRange &&
                    sizeSort && dangerSort) {
                newFilter = [
                    ...newFilter,
                    element
                ]
            }
        })
        // console.log(newFilter)
        setNeoFiltered(newFilter)
        return;
    }
    function updateCharts() {
        const neoPlot = neoFiltered
        let newScatter: any[] = []
        const newBar = {
            labels: ['Veldig små', 'Små', 'Mellomstore', 'Store'],
            values: [0, 0, 0, 0],
        }
        Object.keys(neoPlot).forEach((key) => {
            const diameter = neoPlot[key]['diameter'];
            if (diameter < 10) {
                newBar.values[0] += 1;
            } else if (diameter < 100) {
                newBar.values[1] += 1;
            } else if (diameter < 1000) {
                newBar.values[2] += 1;
            } else {
                newBar.values[3] += 1;
            }
            newScatter = [
                ...newScatter,
                {x: neoPlot[key]['diameter'], y: neoPlot[key]['velocity']}
            ]
        })
        setBarData(newBar)
        if (newScatter.length === 0) {
            setScatterData(null)
        } else {
            setScatterData(newScatter)
        }
        return
    }
    useEffect(() => {
        updateCharts();
    }, [neo,neoFiltered])
    useEffect(() => {
        updateFilter();
    }, [neo,filterSize,filterDangerous,filterMaxSpeed,filterMinSpeed,filterRange])

    return (
        <div className="dashboard-content">
            <DashContentFilter size={filterSize} minSpeed={filterMinSpeed} maxSpeed={filterMaxSpeed} dangerous={filterDangerous} range={filterRange} setSize={setFilterSize} setMinSpeed={setFilterMinSpeed} setMaxSpeed={setFilterMaxSpeed} setDangerous={setFilterDangerous} setRange={setFilterRange}/>
            { neoFiltered ? <DashContentTable neo={neoFiltered}/> : null }
            <div className='dashboard-content-thing'>
                { barData ? <DashContentBars neo={barData}/> : null }
                { scatterData ? <DashControlScatter neo={scatterData}/> : null }
            </div>
        </div>
    )
}