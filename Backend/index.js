import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import "dotenv/config";

const app = express();
app.use(cors());

// TRENDING
app.get("/api/trending", async (req, res) => {
  const r = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        Accept: "application/json"
      }
    }
  );
  res.json(await r.json());
});

// NOW PLAYING
app.get("/api/now-playing", async (req, res) => {
  const r = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        Accept: "application/json"
      }
    }
  );
  res.json(await r.json());
});

// POPULAR
app.get("/api/popular", async (req, res) => {
  const r = await fetch(
    "https://api.themoviedb.org/3/movie/popular",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        Accept: "application/json"
      }
    }
  );
  res.json(await r.json());
});

// UPCOMING
app.get("/api/upcoming", async (req, res) => {
  const r = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        Accept: "application/json"
      }
    }
  );
  res.json(await r.json());
});

app.get("/api/search", async (req, res) => {
  const query = req.query.q;

  if (!query) return res.json({ results: [] });

  const r = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        Accept: "application/json",
      },
    }
  );

  const data = await r.json();
  res.json(data);
});


app.listen(5000, () =>
  console.log("Backend running at http://localhost:5000")
);
