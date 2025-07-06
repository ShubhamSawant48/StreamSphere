import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: movies,
  initialState: {
    topBoxOfficeMovies: null,
    mostPopularMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addTopBoxOfficeMovies: (state, action) => {
      state.topBoxOfficeMovies = action.payload;
    },
    addMostPopularMovies: (state, action) => {
      state.mostPopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const {
  addTopBoxOfficeMovies,
  addMostPopularMovies,
  addTopRatedMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
