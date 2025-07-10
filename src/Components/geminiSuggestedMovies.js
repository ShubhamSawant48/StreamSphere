import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GeminiSuggestedMovies = () => {
  const movieName = useSelector((store) => store.gemini.geminiMoviesNames);
  const moviePoster = useSelector((store) => store.gemini.geminiResults);
  if (!movieName) return;
  return (
    <div className="absolute bg-black top-[270px] left-[200px] w-[850px] mx-40 px-16 py-8 bg-opacity-70 rounded-sm text-white">
      <MoviesList title={movieName[0]} data={moviePoster[0].results} />
      <MoviesList title={movieName[1]} data={moviePoster[1].results} />
      <MoviesList title={movieName[2]} data={moviePoster[2].results} />
      <MoviesList title={movieName[3]} data={moviePoster[3].results} />
      <MoviesList title={movieName[4]} data={moviePoster[4].results} />
    </div>
  );
};

export default GeminiSuggestedMovies;
