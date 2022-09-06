import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios";

export const registrationAuth = createAsyncThunk('auth/registrationAuth', async (params) => {
    try {
        const {data} = await axios.post('/auth/registration', params)
        if (data.token) {
            localStorage.setItem('token', data.token)
        }

        alert(data.message)
        return data
    } catch (e) {
        alert(e.response.data.message + ' ошибка')
    }
})

export const loginAuth = createAsyncThunk('auth/LoginAuth',
    async (params) => {
        try {
            const {data} = await axios.post('/auth/login', params)
            if (data.token) {
                localStorage.setItem('token', data.token)
            }
            return data
        } catch (e) {
            alert(e.response.data.message + ' ошибка')
        }
    })

export const authAuth = createAsyncThunk('auth/auth',
    async () => {
        try {
            const {data} = await axios.get('/auth/auth',
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            if (data.token) {
                localStorage.setItem('token', data.token)
            }
            return data
        } catch (e) {
            localStorage.removeItem('token')
        }
    })


const initialState = {
    currentUser: {},
    isAuth: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setExit(state) {
            state.currentUser = {}
            state.isAuth = false
            localStorage.removeItem('token')
        }
    },
    extraReducers: {
        [registrationAuth.pending]: (state) => {
            state.isAuth = false
        },
        [registrationAuth.fulfilled]: (state, action) => {
            state.isAuth = true
            state.currentUser = action.payload.user
        },
        [registrationAuth.rejected]: (state) => {
            state.isAuth = false
        },

        [loginAuth.pending]: (state) => {
            state.isAuth = false
        },
        [loginAuth.fulfilled]: (state, action) => {
            state.currentUser = action.payload.user
            state.isAuth = true
            console.log(action.payload.user)
        },
        [loginAuth.rejected]: (state, action) => {
            state.isAuth = false
        },
        [authAuth.pending]: (state) => {
            state.isAuth = false
        },
        [authAuth.fulfilled]: (state, action) => {
            state.currentUser = action.payload.user
            state.isAuth = true
        },
        [authAuth.rejected]: (state) => {
            state.isAuth = false
        }
    }
})
export const {setExit} = authSlice.actions
export const authReducer = authSlice.reducer