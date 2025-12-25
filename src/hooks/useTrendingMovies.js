import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/trending`);
        const data = await res.json();
        dispatch(addTrendingMovies(data.results));
      } catch (error) {
        console.error("Trending movies error:", error);
      }
    };

    fetchTrendingMovies();
  }, [dispatch]);
};

export default useTrendingMovies;
