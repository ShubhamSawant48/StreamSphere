import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const TMDB_OPTIONS = {
  headers: {
    Authorization: `Bearer ${process.env.TMDB_KEY}`,
    "Content-Type": "application/json"
  }
};

app.get("/api/trending", async (req, res) => {
  const r = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day",
    TMDB_OPTIONS
  );
  res.json(await r.json());
});

app.get("/api/now-playing", async (req, res) => {
  const r = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing",
    TMDB_OPTIONS
  );
  res.json(await r.json());
});

app.get("/api/popular", async (req, res) => {
  const r = await fetch(
    "https://api.themoviedb.org/3/movie/popular",
    TMDB_OPTIONS
  );
  res.json(await r.json());
});

app.get("/api/upcoming", async (req, res) => {
  const r = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming",
    TMDB_OPTIONS
  );
  res.json(await r.json());
});

app.listen(5000, () =>
  console.log("Backend running on port 5000")
);
