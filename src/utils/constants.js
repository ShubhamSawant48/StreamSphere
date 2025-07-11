export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg";

export const NETFLIX_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const TBO_URL = "https://imdb236.p.rapidapi.com/api/imdb/top-box-office";

export const MPM_URL =
  "https://imdb236.p.rapidapi.com/api/imdb/most-popular-movies";

export const TRM_URL =
  "https://imdb236.p.rapidapi.com/api/imdb/top-rated-english-movies";

export const API_KEY = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "16328ef034msh5836262b1ab22bdp100023jsna1a512ebb6ad",
    "x-rapidapi-host": "imdb236.p.rapidapi.com",
  },
};

export const TMDB_KEY = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN_TMDB}`,
    Accept: "application/json",
  },
};

export const TMDB_CDN = "https://image.tmdb.org/t/p/w185";

export const PROFILE_PIC =
  "https://i.pinimg.com/236x/f3/85/d7/f385d78eba93e8b768bcc04bf96fe5a5.jpg";

export const GEMINI_APIKEY = process.env.REACT_APP_GEMINI_APIKEY;

export const SUPPORTED_LANGUAGES = [
  { identifier: "english", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "marathi", name: "Marathi" },
];
