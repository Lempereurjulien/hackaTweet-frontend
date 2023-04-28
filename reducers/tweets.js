import { createSlice } from "@reduxjs/toolkit";
import { usersSlice } from "./users";

const initialState = {
value : [],
}

export const tweetSlice = createSlice({
    name: 'tweets',
    initialState,
    reducers : {
        addTweet: (state, action) =>{
            state.value.push(action.payload);
        },
        removeTweet: (state, action) =>{
            state.value.filter(data => data !== action.payload.tweet)
        },
        removeAll: (state, action)=>{
            state.value=[];
        }
    }
})

export const {addTweet, removeTweet, removeAll} = tweetSlice.actions;
export default tweetSlice.reducer;