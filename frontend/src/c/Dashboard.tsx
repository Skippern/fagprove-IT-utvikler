import React, {useState } from 'react';

import DashTop from "./DashTop";

export default function Dashboard() {
    const [startDate, setStartDate] = useState<number>(0)
    const [endDate, setEndDate] = useState<number>(0)

    return (
        <div className="dashboard">
            <DashTop startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}/>
            <div className="dashboard-content">Content</div>
            <div className="dashboard-footer">Levert av NFRI</div>
        </div>
    )
}