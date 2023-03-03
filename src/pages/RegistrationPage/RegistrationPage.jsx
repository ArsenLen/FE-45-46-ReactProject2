import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const register = (user) => {
    return axios.post('http://localhost:3001/register', user)
}

const RegistrationPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        const newUser = {
            email,
            password
        }
        register(newUser)
            .then(res => {
                console.log(res)
                toast('Пользователь успешно зарегистрирован')
                setEmail('')
                setPassword('')
            })
            .catch(err => {
                console.log(err.response.data) // текст ошибки
                toast(err.response.data)
            })
    }

    return (
        <form onSubmit={handleRegister}>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name='email' 
                    placeholder='Введите email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="pass">Пароль</label>
                <input 
                    type="password" 
                    name='pass' 
                    placeholder='Ваш пароль'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                />
            </div>
            <input type="submit" value="Зарегистрироваться"/>
            <ToastContainer autoClose={500} theme="light" hideProgressBar={true} />
        </form>
    );
};

export default RegistrationPage;