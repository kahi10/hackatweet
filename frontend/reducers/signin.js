import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: { username: null, password: null },
};

export const userSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    login: (state, action) => {
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