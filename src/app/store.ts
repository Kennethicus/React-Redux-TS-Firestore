import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../feature/listSlicer";

const store = configureStore({
  reducer: {
    lists: todoSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;
