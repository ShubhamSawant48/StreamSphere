import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/moviesSlice";

const API_BASE_URL = "https://your-backend.onrender.com";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/popular`);
        const data = await res.json();
        dispatch(addPopularMovies(data.results));
      } catch (error) {
        console.error("Popular movies error:", error);
      }
    };

    fetchPopularMovies();
  }, [dispatch]);
};

export default usePopularMovies;
