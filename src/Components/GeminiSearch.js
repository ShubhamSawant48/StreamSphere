import Header from "./Header";
import { BG_URL } from "../utils/constants";
import GeminiSearchBar from "./GeminiSearchBar";
import GeminiSuggestedMovies from "./GeminiSuggestedMovies";

const GeminiSearch = () => {
  return (
    <>
      <div className="fixed">
        <img
          src={BG_URL}
          alt="Background Image"
          className="w-screen h-screen object-cover"
        ></img>
      </div>
      <div>
        <Header />
        <GeminiSearchBar />
        <GeminiSuggestedMovies />
      </div>
    </>
  );
};

export default GeminiSearch;
