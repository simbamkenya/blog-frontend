import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: 'user 1'
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {

        }
    }
});

export const { addUser } = userSlice.actions
export default userSlice.reducer

