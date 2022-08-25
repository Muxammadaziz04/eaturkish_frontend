import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { host } from '../../constants';

import style from './Login.module.scss'

const Login = () => {
    const formRef = useRef()
    const navigate = useNavigate()

    const sendForm = async(e) => {
        e.preventDefault()
        const options = {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: formRef.current.username.value, password: formRef.current.password.value })
        }
        let res = await fetch(`${host}/login`, options)
        res = await res.json()

        if (res.status === 201) {
            console.log(res);
            localStorage.setItem('token', JSON.stringify(res.token))
            navigate('/admin')
        }
        else alert(res.message || res.error)
    }

    return (
        <div className={style.login}>
            <form className={style.login__form} ref={formRef} onSubmit={sendForm}>
                <h1>Login page</h1>
                <input type="text" placeholder='Username' name='username' />
                <input type="password" placeholder='Password' name='password' />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;
