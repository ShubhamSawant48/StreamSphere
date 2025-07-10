import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    showGeminiBtn: false,
    geminiMoviesNames: null,
    geminiResults: null,
  },
  reducers: {
    toggleGeminiBtn: (state) => {
      state.showGeminiBtn = !state.showGeminiBtn;
    },
    getGeminiMoviesNames: (state, action) => {
      state.geminiMoviesNames = action.payload;
    },
    getGeminiResults: (state, action) => {
      state.geminiResults = action.payload;
    },
  },
});

export const { toggleGeminiBtn, getGeminiMoviesNames, getGeminiResults } =
  geminiSlice.actions;

export default geminiSlice.reducer;
