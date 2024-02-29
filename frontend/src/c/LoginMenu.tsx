import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function LoginMenu() {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [config, setConfig] = useState<any>()
    const [api, setApi] = useState<string>('http://localhost:5000/api/v1')
    const nav = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    async function handleSetCookie() {
        console.log('U: ', username, '; P: ', password)
        const myHeader = {
            Accept: '*/*',
            Authorization: 'Basic '+ btoa(`${username}:${password}`)
        }
        const url = api+'/login'
        console.log(url)
        const result = await fetch(url, {method: 'GET', headers: myHeader})
        if (result.status === 200) {
            document.cookie = `NFRIusername=${username}`;
            document.cookie = `NFRIpass=${password}; max-age=604800`;
            nav('/dashboard')   
        } else {
            alert('Feil i brukernavn og passord')
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
            <div><img src='img/logo.png' alt='Logo'/></div>
            <div>Velkommen eller noe s&aring;nt</div>
            <div>
                {/* <form method=''> */}
                    <input id='username' name="username" placeholder="Brukernavn" onChange={handleUsernameChange} required/>
                    <input id='password' type='password' name='password' placeholder="Passord" onChange={handlePasswordChange} required/>
                    <input id='remember' type='checkbox' required/> Husk meg
                    <button type='submit' onClick={handleSetCookie}>Logg inn</button>
                {/* </form> */}
            </div>
            <div>
                <Link to='/forgotten'>Glemt passord?</Link>
            </div><div>
                <Link to='/register'>Ikke registrert?</Link>
            </div>

        </div>
    )
}