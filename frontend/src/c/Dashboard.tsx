import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DashTop from "./DashTop";
import DashContent from './DashContent';
import DashBlank from './DashBlank';

export default function Dashboard() {
    const [startDate, setStartDate] = useState<number>(0)
    const [endDate, setEndDate] = useState<number>(0)
    const [searchTrigger, setSearchTrigger] = useState<boolean>(false)
    const [neo, setNeo] = useState<any>()
    const [config, setConfig] = useState<any>()
    const [api, setApi] = useState<string>('http://localhost:5000/api/v1')
    const [user, setUser] = useState<string>()
    const [passwd, setPasswd] = useState<string>()
    const nav = useNavigate();

    const handleGetCookie = () => {
        const cookies = document.cookie.split('; ');
        const myCookie1 = cookies.find(cookie => cookie.startsWith('NFRIusername='));
        const myCookie2 = cookies.find(cookie => cookie.startsWith('NFRIpass='))
        if (myCookie1) {
            setUser(myCookie1.split('=')[1])
        }
        if (myCookie2) {
            setPasswd(myCookie2.split('=')[1])
        }
    }  

    async function fetchNeo() {
        if (endDate === 0 && startDate === 0) {
            return
        }
        handleGetCookie();
        // const user = 'NAIF'
        // const passwd = 'AstroiderErKule123&'
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
        const datafromresult = await result.json();
        console.log(result.status);
        if (result.status !== 200) {
            alert('Du er ikke logget inn!')
            nav('/login')
        }
        try {
            setNeo([...datafromresult['result']])
        } catch (error) {
            console.log('setNeo error => ', error)
        }
    }
    useEffect(() => {
        handleGetCookie();
        fetchNeo();
    }, [searchTrigger])
    useEffect(() => {
        handleGetCookie();
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