import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { GoogleGenAI } from "@google/genai";
import { GEMINI_APIKEY } from "../utils/constants";
import {
  getGeminiMoviesNames,
  getGeminiResults,
} from "../utils/geminiSlice";

const GeminiSearchBar = () => {
  const inputForMovies = useRef(null);
  const language = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // 🔹 TMDB search via BACKEND
  const searchTMDB = async (movie) => {
    const res = await fetch(
      `${BASE_URL}/api/search?q=${encodeURIComponent(movie)}`
    );
    const json = await res.json();
    return json;
  };

  const handleMoviesShow = async () => {
    if (!inputForMovies.current.value) return;

    const ai = new GoogleGenAI({ apiKey: GEMINI_APIKEY });

    const geminiQuery =
      "Suppose you are a movie suggester. Suggest 5 movies related to: " +
      inputForMovies.current.value +
      ". Give only comma separated movie names.";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: geminiQuery,
    });

    const geminiMovies = response.text
      .split(",")
      .map((m) => m.trim());

    // 🔹 Call backend for each movie
    const promiseArray = geminiMovies.map((movie) =>
      searchTMDB(movie)
    );

    const TMDBResults = await Promise.all(promiseArray);

    dispatch(getGeminiMoviesNames(geminiMovies));
    dispatch(getGeminiResults(TMDBResults));
  };

  return (
    <div className="absolute bg-black top-36 left-[200px] w-[850px] mx-40 px-16 py-8 bg-opacity-70 rounded-sm">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-12"
      >
        <input
          ref={inputForMovies}
          type="text"
          className="mr-9 px-5 py-3 col-span-10 rounded-sm"
          placeholder={lang[language].placeHolder}
        />

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
