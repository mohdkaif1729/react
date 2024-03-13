import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
export const store = configureStore({
  reducer: todoReducer,
});
// the function is return the same value as they taek argument
// npm i redux react-redux
/*
  store
  reducer
  
  action
  reducer 
  store
  state
*/
