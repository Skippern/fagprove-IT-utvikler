import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

export default function RegisterMenu() {
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string|null>()
    const [password1, setPassword1] = useState<string>('')
    const [password2, setPassword2] = useState<string>('')
    const [email, setEmail] = useState<string>()
    const [newsletter, setNewsletter] = useState<boolean>()
    const [acceptGDPR, setAcceptGDPR] = useState<boolean>()
    const [config, setConfig] = useState<any>()
    const [api, setApi] = useState<string>('http://localhost:5000/api/v1')
    const nav = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const handlePass1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword1(event.target.value)
    }
    const handlePass2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(event.target.value)
    }
    const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    async function handleSetCookie() {
        if (!password) {
            alert('Gjenta passord lik det du satte')
            return
        }
        console.log('U: ', username, '; P: ', password)
        // const myHeader = {
        //     Accept: '*/*',
        //     Authorization: 'Basic '+ btoa(`${username}:${password}`)
        // }
        let acceptnl = '0'
        if (newsletter) {
            acceptnl = '1'
        }
        const url = api+`/user/create?user=${username}&password=${password}&email=${email}&newsletter=${acceptnl}`
        console.log(url)
        const result = await fetch(url, {method: 'GET'})
        if (result.status === 201) {
            document.cookie = `NFRIusername=${username}`;
            document.cookie = `NFRIpass=${password}; max-age=604800`;
            nav('/dashboard')   
        } else {
            alert('Kunne ikke registrere brukernavn eller passord')
        }
    }

    useEffect(() => {
        if (password1 === password2) {
            setPassword(password1)
        } else {
            setPassword(null)
        }
    }, [password1, password2])
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
            <div><Link to='/login'><button>&lt;</button></Link><img src='img/logo.png' alt='Logo'/></div>
            <div>Registrer deg!</div>
            <div>
                <input name='username' placeholder='Brukernavn' value={username} onChange={handleUsernameChange}/>
                <input name='email' placeholder='E-Post' value={email} onChange={handleMailChange}/>
                <input type='password' name='password1' placeholder='Passord' value={password1} onChange={handlePass1Change}/>
                <input type='password' name='password2' placeholder='Gjenta passord' value={password2} onChange={handlePass2Change}/>
                <input type='checkbox' name='newsletter' />Kan vi sende stuff?<br/>
                <input type='checkbox' name='GDPR' required/> Aksepterer  <Link to='/GDPR'>GDPR og betingelser</Link>
                <button onClick={handleSetCookie} disabled={!password}>Registrer og Log Inn</button>
            </div>
        </div>
    )
}