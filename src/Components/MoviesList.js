import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="flex overflow-x-scroll">
        {/* {movies.map((movie) => (
          <MovieCard data={movie} key={movie.id} />
        ))} */}
      </div>
    </div>
  );
};

export default MoviesList;
