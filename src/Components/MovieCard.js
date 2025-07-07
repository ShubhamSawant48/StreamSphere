import { TMDB_CDN } from "../utils/constants";

const MovieCard = ({ data }) => {
  return (
    <img
      src={TMDB_CDN + data.poster_path}
      alt="Movie Poster"
      className="w-40 pr-4 rounded-md"
    ></img>
  );
};

export default MovieCard;
