import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const fetchNote = (id) => {
    return axios.get(`http://localhost:3001/notes/${id}`)
}

const SingleNotePage = () => {
    const { id } = useParams()
    const [note, setNote] = useState({})

    useEffect(() => {
        fetchNote(id)
            .then(res => setNote(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1> { note.text }</h1>
            <p> <b>Описание:</b> { note.descr } </p>
            <p> <b>Количество задач:</b> { note.tasks } </p>
        </div>
    );
};

export default SingleNotePage;

// 1. прочитать id из адресной строки.
// 2. отправить get запрос на получение данных уникального поста по id
// 3. рисуем данные поста, которые получили в ответе на запрос из п.2

// let {userId} = useParams(); useParams() = { userId : 3 }
// useParams() = { id: 2, userId: 10 }
// {userId, id} = useParams()