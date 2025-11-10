import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

// Hydrate auth state from localStorage
const user = localStorage.getItem('user');
const preloadedState = {
  auth: {
    user: user ? JSON.parse(user) : null,
    isLoggedIn: !!user,
  }
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState,
});

export default store;