import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: { token : null },
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.firstname = action.payload.firstname;
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