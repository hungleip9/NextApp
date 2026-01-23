// store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // ví dụ

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // thêm reducer khác ở đây
  },
});

// Infer types (rất hữu ích khi dùng TypeScript)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
