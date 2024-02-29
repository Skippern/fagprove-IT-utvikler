import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function ResetMenu() {
    const [username, setUsername] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [config, setConfig] = useState<any>()
    const [api, setApi] = useState<string>('http://localhost:5000/api/v1')
    const nav = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    async function handleRequest() {
        if (!username || !email) {
            return;
        }
        const url = api+`/user/reset?user=${username}&email=${email}`
        console.log(url)
        const result = await fetch(url, {method: 'GET'})
        console.log(result.status)
        if (result.status === 202) {
            console.log('New password sent')
            nav('/login')
        } else {
            alert('Brukernavn og e-post stemmer ikke')
        }
    }

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
        <div>
            <div><Link to='/login'><button>&lt;</button></Link><img className='logo-img' src='img/logo.png' alt='Logo'/></div>
            <div><h3>Glemt passordet?</h3></div>
            <div>Fyll ut s&aring; sender vi deg ett nytt</div>
            <div>
                <input placeholder='Brukernavn' onChange={handleUsernameChange}/>
                <input placeholder='E-Post' onChange={handleMailChange}/>
                <button onClick={handleRequest}>Send nytt passord</button>
            </div>
        </div>
    )
}