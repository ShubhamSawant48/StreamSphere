import { useDispatch } from "react-redux";
import { TMDB_KEY } from "../utils/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popMov = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      TMDB_KEY
    );
    const json = await data.json();

    dispatch(addPopularMovies(json));
  };

  useEffect(() => {
    !popMov && getPopularMovies();
  }, []);
};

export default usePopularMovies;
