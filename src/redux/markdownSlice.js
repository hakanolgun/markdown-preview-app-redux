import { createSlice } from "@reduxjs/toolkit";

export const MarkdownSlice = createSlice({
  name: "markdown",
  initialState: {
    content: "",
  },
  reducers: {
    changeContent: (state, action) => {
      state.content = action.payload;
    },
    changeToExample:(state)=>{
      state.content = "# Heading<br>## subheading"
    }
  },
});

export const { changeContent, changeToExample } = MarkdownSlice.actions;
export default MarkdownSlice.reducer;
