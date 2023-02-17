import axios from 'axios';
import React, { useState } from 'react';
import s from './addnote.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// get - получить, отправить - post, удалить - delete, редактировать - put/patch
const addNote = (data) => {
    return axios.post('http://localhost:3001/notes', data)
}

const AddNotePage = () => {
    const [text, setText] = useState('')
    const [descr, setDescr] = useState('')
    const [tasks, setTasks] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newNote = {
            text,
            descr,
            tasks
        }
        addNote(newNote)
            .then(res => {
                console.log(res)
                setText('')
                setDescr('')
                setTasks('')
                toast("Пост создан")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={s.wrapper}>
            <h1>Добавить пост</h1>
            <form className={s.form} onSubmit={handleSubmit}>
                <input 
                    className={s.control}  
                    type="text" 
                    placeholder="Название"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <input 
                    className={s.control} 
                    type="text" 
                    placeholder="Описание"
                    value={descr}
                    onChange={e => setDescr(e.target.value)}
                />
                <input 
                    className={s.control} 
                    type="text"
                    placeholder="Количество задач"
                    value={tasks}
                    onChange={e => setTasks(e.target.value)}
                />
                <input className={s.submit} type="submit" value="Создать пост" />
            </form>
            <ToastContainer 
                theme="dark"
            />
        </div>
    );
};

export default AddNotePage;