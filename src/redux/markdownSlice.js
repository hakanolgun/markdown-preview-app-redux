import { createSlice } from "@reduxjs/toolkit";

const example = `
# HEADING

## Subheading

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

export const MarkdownSlice = createSlice({
  name: "markdown",
  initialState: {
    content: "",
  },
  reducers: {
    changeContent: (state, action) => {
      state.content = action.payload;
    },
    changeToExample: (state) => {
      state.content === example
        ? (state.content = "")
        : (state.content = example);
    },
  },
});

export const { changeContent, changeToExample } = MarkdownSlice.actions;
export default MarkdownSlice.reducer;
