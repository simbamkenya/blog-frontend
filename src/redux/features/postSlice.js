import { createSlice } from "@reduxjs/toolkit";

const initialState={
    post: 'post 1'
}

const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        addPost: (state, action) => {

        }
    }
});

export const { addPost } = postSlice.actions
export default postSlice.reducer