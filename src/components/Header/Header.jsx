import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './header.module.css'


const Header = () => {
    const user = useSelector(state => state.user.currentUser)
    console.log(user)
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <Link to="/"> Главная </Link>
                <Link to="/about"> О нас </Link>
                <Link to="/contacts"> Контакты </Link>
                <Link to="/addnote"> Добавить пост </Link>
                { 
                    user ? (
                        <Link to="/profile">{user.name}</Link>
                    ) :
                    (
                        <>
                        <Link to="/register"> Регистрация </Link>
                        <Link to="/login"> Логин </Link>
                        </>
                    )
                }
            </nav>
        </header>
    );
};

export default Header;

// Link - компонент библиотеки react-router-dom, который оборачивает тег a, является ссылкой
// Несмотря на то, что он оборачивает тег a, он имеет бОльшую функциональность
// Link - более функциональный тег a