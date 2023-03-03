import axios from 'axios';
import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const login = (user) => {
    return axios.post('http://localhost:3001/login', user)
}

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        const currentUser = {
            email,
            password
        }
        login(currentUser)
            .then(res => {
                console.log(res)
                setName(res.data.user.name)
                setEmail('')
                setPassword('')
                toast("успешно вошли")
            })
            .catch(err => {
                console.log(err)
                toast("неправильный логин или пароль")
            })
    }

    return (
        <>
        <h1>{name}</h1>
        {/* {!name && form} */}
        <form onSubmit={handleLogin}>
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
                />
            </div>
            <input type="submit" value="Зарегистрироваться"/>
            <ToastContainer autoClose={500} theme="light" hideProgressBar={true} />
        </form>
        </>
    );
};

export default LoginPage;