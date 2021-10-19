import { createSlice } from "@reduxjs/toolkit";

export const MarkdownSlice = createSlice({
  name: "markdown",
  initialState: {
    content: "t",
  },
  reducers: {
    changeContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { changeContent } = MarkdownSlice.actions;
export default MarkdownSlice.reducer;
