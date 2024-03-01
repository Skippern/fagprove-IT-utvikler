import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

export default function RegisterMenu() {
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string|undefined>()
    const [password1, setPassword1] = useState<string>('')
    const [password2, setPassword2] = useState<string>('')
    const [email, setEmail] = useState<string>()
    const [newsletter, setNewsletter] = useState<boolean>(true)
    const [acceptGDPR, setAcceptGDPR] = useState<boolean>(false)
    const [config, setConfig] = useState<any>()
    const [api, setApi] = useState<string>('http://localhost:5000/api/v1')
    const [canSend, setCanSend] = useState<boolean>(false)
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
    const handleNewsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewsletter(!newsletter)
    }
    const handleGDPRChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptGDPR(!acceptGDPR)
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
        if (password1 === password2 && password1 !== '') {
            setPassword(password1)
        } else {
            setPassword(undefined)
        }
    }, [password1, password2])
    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const response = await fetch('./config.json');
                const jsonConfig = await response.json();
                setConfig(jsonConfig)
                // console.log(jsonConfig)
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
    useEffect(() => {
        console.log('U: ', username, ' P: ', password, ' G: ', acceptGDPR, ' E: ', email)
        if (!acceptGDPR) {
            setCanSend(false)
            return
        }
        if (!password) {
            setCanSend(false)
            return
        }
        if (!username) {
            setCanSend(false)
            return
        }
        if (!email) {
            setCanSend(false)
            return
        }
        if (username) {
            if (username.length < 4) {
                setCanSend(false)
                return
            }
        }
        if (email) {
            // check email to contain correct format
            console.log(email.indexOf('@'))
            console.log(email.lastIndexOf('.'))
            if (!email.includes('@')) {
                setCanSend(false)
                return
            }
            if (!email.includes('.')) {
                setCanSend(false)
                return
            }
            if (email.lastIndexOf('.') < email.indexOf('@')) {
                setCanSend(false)
                return
            }
        }
        if (password) {
            //check password for format
            if (password.length < 6) {
                setCanSend(false)
                return
            }
        }
        console.log('CanSend: true')
        setCanSend(true)
    }, [username,password,acceptGDPR,email])
    return (
        <div>
            <div><Link to='/login'><button>&lt;</button></Link><img className='logo-img' src='img/logo.png' alt='Logo'/></div>
            <div>Registrer deg!</div>
            <div>
                <input name='username' placeholder='Brukernavn' value={username} onChange={handleUsernameChange}/>
                <input name='email' placeholder='E-Post' value={email} onChange={handleMailChange}/>
                <input type='password' name='password1' placeholder='Passord' value={password1} onChange={handlePass1Change}/>
                <input type='password' name='password2' placeholder='Gjenta passord' value={password2} onChange={handlePass2Change}/>
                <input type='checkbox' name='newsletter'  checked={newsletter} onChange={handleNewsChange} />Kan vi sende stuff?<br/>
                <input type='checkbox' name='GDPR' checked={acceptGDPR} onChange={handleGDPRChange}/> Aksepterer  <Link to='/GDPR'>GDPR og betingelser</Link>
                <button onClick={handleSetCookie} disabled={!canSend}>Registrer og Log Inn</button>
            </div>
        </div>
    )
}