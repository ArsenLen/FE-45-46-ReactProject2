import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/"> Главная </Link>
                <Link to="/about"> О нас </Link>
                <Link to="/contacts"> Контакты </Link>
                <Link to="/addnote"> Добавить пост </Link>
            </nav>
        </header>
    );
};

export default Header;

// Link - компонент библиотеки react-router-dom, который оборачивает тег a, является ссылкой
// Несмотря на то, что он оборачивает тег a, он имеет бОльшую функциональность
// Link - более функциональный тег a