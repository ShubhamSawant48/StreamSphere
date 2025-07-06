import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TMDB_KEY } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const trendMov = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      TMDB_KEY
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json));
  };

  useEffect(() => {
    !trendMov && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
