import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../store/moviesSlice";

const API_BASE_URL = "https://your-backend.onrender.com";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/trending`);
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
