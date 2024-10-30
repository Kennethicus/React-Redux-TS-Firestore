import { createSlice, nanoid } from "@reduxjs/toolkit";

import { db } from "../firebase-config";
const dataStore = [
  {
    id: 1,
    todoName: "Make a work",
    isDone: false,
  },
  {
    id: 2,
    todoName: "Enhance your craft",
    isDone: false,
  },
];

const todoSlice = createSlice({
  name: "TODO",
  initialState: dataStore,
  reducers: {
    add: (state, action) => {
      return [...state, { ...action.payload, id: nanoid() }];
    },
  },
});

export default todoSlice.reducer;
export const { add } = todoSlice.actions;
