import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TMDB_KEY } from "../utils/constants";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendMov = useSelector((store) => store.movies.popularMovies);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      TMDB_KEY
    );
    const json = await data.json();

    dispatch(addTrendingMovies(json));
  };

  useEffect(() => {
    !trendMov && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
