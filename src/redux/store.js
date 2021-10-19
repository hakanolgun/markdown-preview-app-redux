import { configureStore } from "@reduxjs/toolkit";
import MarkdownReducer from "./markdownSlice";

export const store = configureStore({
  reducer: {
    markdown: MarkdownReducer,
  },
});
