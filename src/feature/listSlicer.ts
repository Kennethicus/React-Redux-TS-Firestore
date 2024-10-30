import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { db } from "../firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";

interface Todo<Extrafields extends object = {}> {
  id: string; // Change to string if you're using Firestore IDs
  todoName: string;
  isDone: boolean;
  [key: string]:
    | string
    | number
    | boolean
    | object
    | Extrafields[keyof Extrafields];
}

const todoCollection = collection(db, "todos");

// ? Fetch todos from firestore
export const fetchTodos = createAsyncThunk<Todo[]>(
  "todos/fetchTodos",
  async () => {
    const snapshot = await getDocs(todoCollection);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Todo[];
  }
);

// ? Add new todo to Firestore
export const addTodo = createAsyncThunk<Todo, Omit<Todo, "id">>(
  "todos/addTodo",
  async (newTodo) => {
    const docRef = await addDoc(todoCollection, newTodo);
    return { id: docRef.id, ...newTodo } as Todo;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default todoSlice.reducer;
