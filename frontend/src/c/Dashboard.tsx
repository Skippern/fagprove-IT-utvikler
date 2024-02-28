import React, {useState, useEffect } from 'react';

import DashTop from "./DashTop";
import DashContent from './DashContent';
import DashBlank from './DashBlank';
// import { atob } from 'buffer';

export default function Dashboard() {
    const [startDate, setStartDate] = useState<number>(0)
    const [endDate, setEndDate] = useState<number>(0)
    const [searchTrigger, setSearchTrigger] = useState<boolean>(false)
    const [neo, setNeo] = useState<any>()
    const [config, setConfig] = useState<any>()
    const [api, setApi] = useState<string>('http://localhost:5000/api/v1')

    async function fetchNeo() {
        if (endDate === 0 && startDate === 0) {
            return
        }
        const user = 'NAIF'
        const passwd = 'AstroiderErKule123&'
        const myHeader = {
            Accept: '*/*',
            Authorization: 'Basic '+ btoa(`${user}:${passwd}`),
        }
        let url = api+'/search?'
        if (startDate > 0) {
            url = url + 'from='+startDate.toString() + '&'
        }
        if (endDate > 0) {
            url = url + 'to='+endDate.toString()
        }
        console.log(url);
        const result = await fetch(url, {method: "GET", headers: myHeader});
        console.log(result.status);
        const datafromresult = await result.json();
        try {
            setNeo([...datafromresult['result']])
        } catch (error) {
            console.log('setNeo error => ', error)
        }
    }
    useEffect(() => {
        fetchNeo();
    }, [searchTrigger])
    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const response = await fetch('./config.json');
                const jsonConfig = await response.json();
                setConfig(jsonConfig)
                console.log(jsonConfig)
            } catch (error) {
                console.log('Error fetch config => ', error)
            }
        }
        fetchConfig();
    }, [])
    useEffect(() => {
        if (config && config.endpoint) {
            try {
            setApi(config.endpoint)
            } catch (error) {
                console.log('Could not set API endpoint')
            }
        }
    }, [config])
    return (
        <div className="dashboard">
            <DashTop startDate={startDate} endDate={endDate} searchTrigger={searchTrigger} setStartDate={setStartDate} setEndDate={setEndDate} setSearchTrigger={setSearchTrigger}/>
            {neo ? <DashContent neo={neo}/> : <DashBlank/>}
            <div className="dashboard-footer"><br/>Levert av NFRI</div>
        </div>
    )
}