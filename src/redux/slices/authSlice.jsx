import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  authData: Cookies.get('authData')
    ? JSON.parse(Cookies.get('authData'))
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.authData = action.payload.authData;
      Cookies.set('authData', JSON.stringify(action.payload.authData), {
        expires: 1,
      });
    },
    logout: (state) => {
      state.authData = null;
      Cookies.remove('authData');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
