import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import modalReucer from './slices/modalSlice';
import apiReducer from './slices/apiSlice';
import aboutcityReducer from './slices/aboutcitySlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReucer,
    api: apiReducer,
    aboutcity: aboutcityReducer,
  },
});

export default store;
