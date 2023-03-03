import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const fetchNote = (id) => {
    return axios.get(`http://localhost:3001/notes/${id}`)
}

const deleteNote = (id) => {
    return axios.delete(`http://localhost:3001/notes/${id}`)
}

const changeNote = (id, data) => {
    return axios.put(`http://localhost:3001/notes/${id}`, data)
}

const SingleNotePage = () => {
    const { id } = useParams() // параметры url адреса
    const [note, setNote] = useState({})
    const [editMode, setEditMode] = useState(false)
    const [text, setText] = useState('')
    const [descr, setDescr] = useState('')
    const [tasks, setTasks] = useState('')

    useEffect(() => {
        fetchNote(id)
            .then(res => {
                setNote(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleDelete = () => {
        deleteNote(id)
            .then(() => {
                window.location.replace('/') // редирект на главную страницу
            })
            .catch(err => console.log(err))
    }

    const handleEdit = () => {
        // какие-то операции UI
        // меняем на режим редактирования
        setEditMode(true)
        // задаем в инпуты значения, которые нужно поменять
        setText(note.text)
        setDescr(note.descr)
        setTasks(note.tasks)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const editedNote = {
            text,
            descr,
            tasks
        }
        changeNote(id, editedNote)
            .then(res => {
                setNote(res.data)
                setEditMode(false)
            })
    }

    return (
        <>
            { editMode ? (
                <form onSubmit={handleSubmit}>
                    <input  
                        type="text" 
                        placeholder="Название"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Описание"
                        value={descr}
                        onChange={e => setDescr(e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="Количество задач"
                        value={tasks}
                        onChange={e => setTasks(e.target.value)}
                    />
                    <input type="submit" value="Сохранить пост" />
                </form>
            ) : (
                <div>
                    <h1> { note.text }</h1>
                    <p> <b>Описание:</b> { note.descr } </p>
                    <p> <b>Количество задач:</b> { note.tasks } </p>
                    <div>
                        <button onClick={handleDelete}>Удалить</button>
                        <button onClick={handleEdit}>Редактировать</button>
                    </div>
                </div>
            ) }
            
        </>
        
    );
};

export default SingleNotePage;

// <> </> - реакт фрагмент нужен для того, чтобы не создавать доп.узел и задать родителя
// <React.Fragment></React.Fragment> 
// <div></div> 

// 1. прочитать id из адресной строки.
// 2. отправить get запрос на получение данных уникального поста по id
// 3. рисуем данные поста, которые получили в ответе на запрос из п.2

// let {userId} = useParams(); useParams() = { userId : 3 }
// useParams() = { id: 2, userId: 10 }
// {userId, id} = useParams()


// ДЗ. Перенести все axios запросы в модуль notes.js и в компонентах вызывать 
// импортированные из модуля функции. 
// 

// В проекте blog добавить функции удаления и редактирования поста.  

// https://github.com/ArsenLen/FE-35-36-ReactBlog
// https://github.com/ArsenLen/FE-45-46-ReactProject2