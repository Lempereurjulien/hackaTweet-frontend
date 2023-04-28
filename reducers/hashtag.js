import { createSlice } from "@reduxjs/toolkit";
import { usersSlice } from "./users";

const initialState = {
    value : [],
};

export const hashtagSlice = createSlice({
    name: 'hashtag',
    initialState,
    reducers: {
        addHashtag : (state, action) =>{
            state.value.push(action.payload);
        },
        removeHashtag: (state,action) =>{
           state.value = state.value.filter(a => a !== action.payload);
        }

    }
})

export const {addHashtag, removeHashtag} = hashtagSlice.actions;
export default hashtagSlice.reducer;

