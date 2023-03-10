import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const user = useSelector(state => state.user.currentUser)
    const navigate = useNavigate()
    useEffect(() => {
        if(user == null) {
            navigate('/login')
        } 
    }, [user])
    return (
        <div>
            <h1>Страница пользователя</h1>
            <p>{user?.email}</p>
            <p>{user?.name}</p>
        </div>
    );
};

export default ProfilePage;