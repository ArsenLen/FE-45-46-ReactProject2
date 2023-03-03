import React, { useEffect, useState } from 'react';
import Note from '../Note/Note';
import s from './notes.module.css'
import noteService from '../../services/notes'

const Notes = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        noteService
            .getAll()
            .then(res => {
                setNotes(res.data)
                // UI логика
            })
            .catch(err => {
                // toast(err)
                console.log(err)
            })
    }, [])

    return (
      <div className={s.wrapper}>
        <h1>Темы занятий</h1>
        {notes.map((note) => (
            <Note key={note.id} id={note.id} title={note.text} descr={note.descr} />
        ))}
      </div>
    );
};

export default Notes;

// rsc

// .json() - 