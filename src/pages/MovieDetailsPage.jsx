import { Link, useParams, Outlet } from "react-router-dom";

import { aboutFilms } from "../api-for-film";
import { useEffect, useState } from "react";

export default function MovieDetailsPage() {
  const [filmId, setFilmId] = useState("");

  console.log(filmId);

  const { id } = useParams();

  useEffect(() => {
    const updateApiForFilm = async () => {
      const dataFilm = await aboutFilms(id);
      setFilmId(dataFilm);
    };

    updateApiForFilm();
  }, [id]);

  const { title, overview, genres, poster_path, release_date, vote_average } =
    filmId;

  const poster = `https://image.tmdb.org/t/p/w300/${poster_path}`;

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <img src={poster} alt={title} />
      <div>
        {" "}
        <h2>
          {title} ({release_date})
        </h2>
        <p>
          <b>User Score:</b> {vote_average && vote_average.toFixed(1)}
        </p>
        <p>
          <b>Overview:</b> {overview}
        </p>
        <p>
          <b>Genres:</b>{" "}
          {genres &&
            genres.map((genre) => <span key={genre.id}>{genre.name}, </span>)}
        </p>
        <div>
          <Link to="cast">Cast</Link>
          <Link to="review">Reviews</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
