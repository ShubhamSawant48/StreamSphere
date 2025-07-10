import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { GoogleGenAI } from "@google/genai";
import { GEMINI_APIKEY } from "../utils/constants";
import { TMDB_KEY } from "../utils/constants";
import { getGeminiMoviesNames, getGeminiResults } from "../utils/geminiSlice";

const GeminiSearchBar = () => {
  const inputForMovies = useRef(null);
  const language = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const searchTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_KEY
    );

    const json = data.json();
    console.log(json);

    return json;
  };

  const handleMoviesShow = async () => {
    const ai = new GoogleGenAI({ apiKey: GEMINI_APIKEY });

    const geminiQuery =
      "Suppose you are movie suggestor and suggest me 5 movies related to query : " +
      inputForMovies.current.value +
      " .give me movies in comma separated format like andaz apna apna, koi mil gaya, housefull";

    // console.log(geminiQuery);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: geminiQuery,
    });
    // console.log(response.text);

    const geminiMovies = response.text.split(", ");
    const promiseArray = geminiMovies.map((movie) => searchTMDB(movie));
    const TMDBResults = await Promise.all(promiseArray);
    console.log(promiseArray);
    console.log(TMDBResults);

    dispatch(getGeminiMoviesNames(geminiMovies));
    dispatch(getGeminiResults(TMDBResults));
  };

  return (
    <div className="absolute bg-black top-36 left-[200px] w-[850px] mx-40 px-16 py-8 bg-opacity-70 rounded-sm">
      <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-12 ">
        <input
          ref={inputForMovies}
          type="text"
          className="mr-9 px-5 py-3 col-span-10 rounded-sm"
          placeholder={lang[language].placeHolder}
        ></input>
        <button
          className="bg-red-600 text-black rounded-sm px-5 py-3 col-span-2 active:text-white"
          onClick={handleMoviesShow}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
