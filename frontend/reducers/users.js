import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: { token : null },
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.firstname = action.payload.password;
      state.value.username = action.payload.username;
      state.value.password = action.payload.password;
    },
    logout: (state) => {
      state.value.password = null;
      state.value.username = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;