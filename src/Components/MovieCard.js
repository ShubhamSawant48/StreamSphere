const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={movie.primaryImage} alt="Movie Poster"></img>
    </div>
  );
};

export default MovieCard;
