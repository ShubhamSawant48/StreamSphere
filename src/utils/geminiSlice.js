import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    showGeminiBtn: false,
  },
  reducers: {
    toggleGeminiBtn: (state) => {
      state.showGeminiBtn = !state.showGeminiBtn;
    },
  },
});

export const { toggleGeminiBtn } = geminiSlice.actions;

export default geminiSlice.reducer;
