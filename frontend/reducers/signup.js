import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: { firstname: null, username: null, password: null },
};

export const userSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value.firstname = action.payload.username;
            state.value.password = action.payload.password;
            state.value.username = action.payload.username;
        },
        logout: (state) => {
            state.value.password = null;
            state.value.username = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;