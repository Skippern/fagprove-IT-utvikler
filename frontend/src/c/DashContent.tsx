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
    const [neoFiltered, setNeoFiltered] = useState<any>(neo)

    useEffect(() => {
        console.log('Filter updated')
    }, [filterSize])

    return (
        <div className="dashboard-content">
            <DashContentFilter size={filterSize} setSize={setFilterSize}/>
            <DashContentTable neo={neoFiltered}/>
            <div className='dashboard-content-thing'>
                <DashContentBars neo={neo}/>
                <DashControlScatter data={neo}/>
            </div>
        </div>
    )
}