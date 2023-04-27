import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    value: {firstname : null, username : null, token: null},
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        login : (state, action) =>{
            state.value.firstname = action.payload.firstname,
            state.value.username = action.payload.username,
            state.value.token = action.payload.token
        },
        logout : (state, action) =>{
            state.value.firstname =null,
            state.value.username = null,
            state.value.token = null
        }
    }
})

export const {login, logout} = usersSlice.actions;
export default usersSlice.reducer;
