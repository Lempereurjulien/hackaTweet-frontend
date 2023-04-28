import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const likeSlice = createSlice({
    name : 'likes',
    initialState,
    reducers: {
        addLike : (state, action) =>{
            state.value.push(action.payload);
        },
        removeLike : (state, action) =>{
            state.value = state.value.filter(data => data !== action.payload);
        }
    }
})

export const {addLike, removeLike} = likeSlice.actions;
export default likeSlice.reducer;