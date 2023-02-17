import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Notes from './components/Notes/Notes';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import SingleNotePage from './pages/SingleNotePage/SingleNotePage';
import AddNotePage from './pages/AddNotePage/AddNotePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Notes />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contacts />} path="/contacts" />
        <Route element={<SingleNotePage />} path="/note/:id" />
        <Route element={<AddNotePage />} path="/addnote" />
      </Routes>
    </div>
  );
}
// 
export default App;

// /note/id - 
// /note/:id
// /note/21
// /note/15
// Создать новый компонент Contacts, прокинуть туда <h1>Contact</h1>
// Зарегистировать новый роут, при переходе на который отображать компонент Contacts
// Создать ссылку, при нажатию на которую, переносить пользователя на ссылку /contacts

// Что хотим, чтобы пользователь увидел, когда перешел на конкретный роут(ссылку)?
// Route element="Notes" - мы хотим увидеть component Notes
// path="/about" - когда переходим на /about


// / - главная страница 

// npm i axios --save -S
// npm i axios --save-dev -D devDependencies
// Используя метод map отрисовать li с данными из объекта
/*
  ["Left", "Right"] => "Left" "Right"
  1. Не объявлять состояние внутри циклов, условий, функций
*/
// .push() - мутирует состояние, добавляет к начальному массиву значение
// .concat() - возвращает новый массив с добавленным значением
// Задача. При нажатии на left, добавлять в массив clicks 'L', 
  // При нажатии на right, добавлять в массив clicks 'R'
// Задача. При нажатии на кнопку left, менять свойство left на 1
// При нажатии на right менять свойства right на 1 

// Задача. При нажатии на кнопку left, увеличивать состояние left на 1
// При нажатии на кнопку right, увелиичивать состояние right на 1
// Feature Slices
// left = 0, left = 0 + 1, left = 1
// left = 1, left = 1 + 1, left = 2
// let left = 0
  // left = left + 1
  // setLeft(left + 1) - говорит реакту перерисоваться
  // left++
  // left = left + 1

  /*  После первого клика по left
    const newClicks = {
      left: 1 (clicks.left = 0, clicks.left + 1 = 1),
      right: clicks.right
    }
    setClicks(newClicks)
    clicks = {
      left: 1,
      right: 0
    }
    После первого клика по left
    const newClicks = {
      left: 1 (clicks.left = 1, clicks.left + 1 = 2),
      right: clicks.right
    }
    clicks = {
      left: 2,
      right: 0
    }
    React
    setClicks(clicks.left + 1)
    JS
    clicks = clicks.left + 1
  */

    /*
      const arr = [10, 15, 20]
      const greeting = "Hello"
      arr.concat(greeting) // [10, 15, 20, "Hello"]
      [...arr, ...greeting] // [10, 15, 20, 'H', 'e', 'l', 'l']
    */

