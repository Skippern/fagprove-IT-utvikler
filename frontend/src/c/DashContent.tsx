import React, { useState } from 'react'
import DashContentFilter from './DashContentFilter';
import DashContentTable from './DashContentTable';
import DashContentBars from './DashContentBars';
import DashControlScatter from './DashContentScatter';

interface Props {
    neo: any;
}
export default function DashContent({neo}: Props) {
    const [neoFiltered, setNeoFiltered] = useState<any>(neo)
    return (
        <div className="dashboard-content">
            <DashContentFilter size='all'/>
            <DashContentTable neo={neoFiltered}/>
            <DashContentBars neo={neoFiltered}/>
            <DashControlScatter neo={neoFiltered}/>
        </div>
    )
}