import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false, // если false, то пока не нажали на кнопку "Войти", если true "кнопка нажата"
        error: false // если false, ошибки нет, перевести в true, если ошибка появилась
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.currentUser = action.payload // payload - данные пользователя. {userName: "Arsen", email: "admin@mail.ru"}
        }
    }
})

export default userSlice.reducer;
export const { loginSuccess } = userSlice.actions;
/*
    userSlice = {
        reducer: {},
        actions: {
            loginSuccess: {}
        }
    }
*/