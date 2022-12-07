import { createSlice } from '@reduxjs/toolkit';
import { setCookie, getCookie, removeCookie } from '@/pages/utils/cookie';

export const userSlice: any = createSlice({
    name: 'user',
    initialState: {
        value: {
            token: getCookie('token') || 'PASS',
            username: '',
            idenity: 0
        }
    },
    reducers: {
        setToken: (state, action) => {
            state.value.token = action.payload;
            removeCookie('token');
            setCookie('token', action.payload);
        },
        setUsername: (state, action) => {
            state.value.username = action.payload;
        },
        setIdenity: (state, action) => {
            state.value.idenity = action.payload;
        }
    }
});

export const { setToken, setIdenity, setUsername } = userSlice.actions;

export default userSlice.reducer;
