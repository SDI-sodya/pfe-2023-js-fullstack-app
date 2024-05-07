import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';


// переробити стор у проекті на тулкіт

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    user: userReducer
  }
});

export default store;
