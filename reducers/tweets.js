import { createSlice } from "@reduxjs/toolkit";
import { usersSlice } from "./users";

const initialState = {
  value: [],
};

export const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweet: (state, action) => {
      state.value.push(action.payload.tweet);
    },
    removeTweet: (state, action) => {
      state.value.filter((data) => data !== action.payload.tweet);
    },
    // emptystring: (state) => {
    //   state.value.push([]);
    // },
  },
});

export const { addTweet, removeTweet } = usersSlice.actions;
export default tweetSlice.reducer;
